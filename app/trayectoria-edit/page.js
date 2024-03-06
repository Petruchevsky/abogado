"use client";
import { FaSave } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { useAuth } from "../context/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./trayectoria-edit.css";

function TrayectoriaEdit() {
	const [titulo, setTitulo] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [edit, setEdit] = useState(false);
	const router = useRouter();
	const { getCookie, isLogged, logout } = useAuth();

	useEffect(() => {
		if (!getCookie || !isLogged) {
			router.push("/admin");
		}
	}, [isLogged]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("/api/trayectoria", { cache: "no-store" });
				const data = await res.json();

                if(data === null) {
                    return;
                }
                
				const descripcionDecoded = decodeURIComponent(data.descripcion);
				const descripcionFormatted = descripcionDecoded.replace(/\n/g, "<br/>");
				setTitulo(data.titulo);
				setDescripcion(descripcionFormatted);
			} catch (error) {
				throw Error(error.message);
			}
		};
		fetchData();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const descripcionEncoded = encodeURIComponent(descripcion);
		const data = { titulo, descripcionEncoded };

		try {
			const res = await fetch("/api/trayectoria", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) throw Error("Algo salió mal");
			setEdit(true);
		} catch (error) {
			throw Error(error.message);
		}
	};

	

	return (
		<main className="container section-trayec-edit">
			<div className="article-trayec-edit">
				<form onSubmit={handleSubmit} className="container form formulario">
					<label className="text-center" htmlFor="titulo">Título</label>
					<input
						type="text"
						value={titulo}
						onChange={(e) => setTitulo(e.target.value)}
						placeholder="Ingresa el nuevo título"
						required
						className="py-1"
					/>
					<label className="text-center" htmlFor="descripcion">Trayectoria</label>
					<textarea
						type="text"
						value={descripcion}
						onChange={(e) => setDescripcion(e.target.value)}
						placeholder="Ingresa el nuevo texto"
						required
						className="py-1"
					/>
					<button className="link-button-success" type="submit">
						<FaSave />
						Guardar Cambios
					</button>
					{edit && (
						<p className="success">
							<GrStatusGood className="black-color"/>
							Guardado con éxito!
						</p>
					)}
				</form>
				<div className="button-container">
					<Link href="/trayectoria" className="link-button">
						Volver al Trayectoria
					</Link>
					<button
						type="button"
						className="link-button-danger"
						onClick={() => logout()}
					>
						<MdLock />
						Salir Modo Admin
					</button>
				</div>
			</div>
		</main>
	);
}

export default TrayectoriaEdit;
