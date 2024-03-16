"use client";
import { FaSave } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineQueryStats } from "react-icons/md";
import { useAuth } from "../context/auth-context";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./trayectoria-edit.css";
import { Fade, Zoom } from "react-awesome-reveal";

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
                

				setTitulo(data.titulo);
				setDescripcion(data.descripcion);
			} catch (error) {
				throw Error(error.message);
			}
		};
		fetchData();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = { titulo, descripcion };

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
		<Fade duration={3000}>
			<main className="container section-trayec-edit">
				<div className="article-trayec-edit">
				<Zoom cascade damping={0.2} delay={300}>
					<Image src="/img/logo-png.png" width={500} height={500} alt="logo de Orlando Rojas" className="logo-sm" />
						<h1>Editor de Página de Trayectoria</h1>
				</Zoom>
					
					<form onSubmit={handleSubmit}>
						<Zoom cascade damping={0.2} delay={300} className="w-100 text-l">
							<label htmlFor="titulo">Título</label>
							<input
								type="text"
								value={titulo}
								onChange={(e) => setTitulo(e.target.value)}
								placeholder="Ingresa el nuevo título"
								required
							
							/>
							<label htmlFor="descripcion">Trayectoria</label>
							<textarea
								type="text"
								value={descripcion}
								onChange={(e) => setDescripcion(e.target.value)}
								placeholder="Ingresa el nuevo texto"
								required
							/>
						</Zoom>
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
							<MdOutlineQueryStats />
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
		</Fade>
	);
}

export default TrayectoriaEdit;
