"use client";
import "./AdminPageComponent.css";
import { useAuth } from "@/app/context/auth-context";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoPasskeyFill } from "react-icons/go";
import { MdHome } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { Fade, Zoom } from "react-awesome-reveal";

function AdminPageComponent() {
	const { isLogged, setIsLogged, setCookie, getCookie, deleteCookie } = useAuth();
	const [claveMaestra, setClaveMaestra] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/password", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(claveMaestra),
			});

			if (!response.ok) {
				setError("Clave Maestra Incorrecta");
				setIsLogged(false);
				console.log("isLogged: " + isLogged);
				throw Error("Clave Maestra Incorrecta");
			}

			if (response.ok) {
				setCookie("AuthCookie", true);
				console.warn("Modo Admin Activado");
				setIsLogged(getCookie("AuthCookie"));
				setError("");
				console.log("isLogged: " + isLogged);
			}
		} catch (error) {
			console.error(error.message);
			setError("Clave Maestra Incorrecta");
			setIsLogged(false);
		}
	};

	const handleClick = () => {
		deleteCookie("AuthCookie");
		setIsLogged(false);
		setError("");
		setClaveMaestra("");
		console.warn("Modo Admin Desactivado");
		console.log("isLogged: " + isLogged);
	};

	useEffect(() => {
		if (getCookie("AuthCookie")) {
			setIsLogged(getCookie("AuthCookie"));
		}
	}, []);

	useEffect(() => {
		if (isLogged) {
			console.warn("Modo Admin Activado");
			console.log("isLogged: " + isLogged);
		} else {
			console.warn("Modo Admin Desactivado");
			console.log("isLogged: " + isLogged);
		}
	}, [isLogged]);

	return (
		<Fade durartion={2000}>
			<main>
				<section className="section-admin main-container-y">
					<article className="article-admin">
						<Zoom cascade damping={0.2} delay={300}>
							<Image
								src="/img/logo-png.png"
								width={500}
								height={500}
								alt="logo de Orlando Rojas"
								className="logo-sm"
							/>

							<h2>Bienvenido Orlando</h2>
							<h1 className="text-icon-aligner">
								Por favor, ingresa tu clave maestra{" "}
								<GoPasskeyFill className="icon-key" />
							</h1>
						</Zoom>

							<Zoom cascade damping={0.2} delay={300} className="w-100 m-0">
						<form onSubmit={handleSubmit}>
								<input
									type="password"
									value={claveMaestra}
									placeholder="Ingresa tu Clave Maestra"
									onChange={(e) => setClaveMaestra(e.target.value)}
								/>
								<button
									type="submit"
									className={isLogged ? "hidden" : "link-button-success"}
								>
									<AiOutlineLogin />
									Entrar al Modo Admin
								</button>
								<button
									type="button"
									className={!isLogged ? "hidden" : "link-button-danger"}
									value=""
									onClick={handleClick}
								>
									<MdOutlineDoNotDisturb />
									Salir del Modo Admin
								</button>
						</form>
							</Zoom>

						<Zoom cascade damping={0.2} delay={300}>
							<Link href="/" className="link-button">
								<MdHome />
								Volver al Inicio
							</Link>
							<Link href="/modificar-password" className="link">
								<p>Modifica tu Contraseña</p>
							</Link>
						</Zoom>

						{error !== "" && <Zoom className="w-100"><p className="error">{error}</p></Zoom>}
						{isLogged && (
							<Zoom className="w-100">
								<p className="success">
									Ahora estás en Modo Admin y podrás modificar el contenido del
									sitio.
								</p>
							</Zoom>
						)}
					</article>
				</section>
			</main>
		</Fade>
	);
}

export default AdminPageComponent;
