"use client";
import { FaSave } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { useAuth } from "../context/auth-context";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./areas-edit.css";

function AreasEdit() {
	const [introduccion, setIntroduccion] = useState("");
	const [derechoFamilia, setDerechoFamilia] = useState("");
	const [derechoSucesorio, setDerechoSucesorio] = useState("");
	const [edit, setEdit] = useState(false);
	const router = useRouter();
	const { getCookie, isLogged, logout, setIsLogged, deleteCookie } = useAuth();

	useEffect(() => {
		if (!getCookie || !isLogged) {
			router.push("/admin");
		}
	}, [isLogged]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("/api/areas-de-practica", { cache: "no-store" });
				const data = await res.json();
                if(data === null) {
                    return;
                }
				setIntroduccion(data.introduccion);
				setDerechoFamilia(data.derechoFamilia);
				setDerechoSucesorio(data.derechoSucesorio);
			} catch (error) {
				throw Error(error.message);
			}
		};
		fetchData();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = { introduccion, derechoFamilia, derechoSucesorio };

		try {
			const res = await fetch("/api/areas-de-practica", {
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
		<main className="container section-areas-edit">
			<div className="article-areas-edit">
			<Image src="/img/logo-png.png" width={500} height={500} alt="logo de Orlando Rojas" className="logo-sm" />
        	<h1>Editor de Página de Areas de Práctica</h1>
				
				<form onSubmit={handleSubmit}>
					<label htmlFor="introduccion">Introducción</label>
					<textarea
						type="text"
						value={introduccion}
						onChange={(e) => setIntroduccion(e.target.value)}
						placeholder="Ingresa el nuevo texto para tu introducción"
						
					/>
					<label htmlFor="derechoFamilia">Derecho de Familia</label>
					<textarea
						type="text"
						value={derechoFamilia}
						onChange={(e) => setDerechoFamilia(e.target.value)}
						placeholder="Ingresa el nuevo texto para Derecho de Familia"
						required
						
					/>
                    <label htmlFor="derechoFamilia">Derecho Sucesorio</label>

					<textarea
						type="text"
						value={derechoSucesorio}
						onChange={(e) => setDerechoSucesorio(e.target.value)}
						placeholder="Ingresa el nuevo texto para Derecho Sucesorio"
						required
						
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
					<Link href="/areas-de-practica" className="link-button">
						Volver a Areas de Práctica
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

export default AreasEdit;
