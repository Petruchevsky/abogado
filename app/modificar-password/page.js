"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import "./modificar-password.css";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

function ModificarPassword() {
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [responseSuccess, setResponseSuccess] = useState("");
	const [responseError, setResponseError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = { password, newPassword, confirmNewPassword };
		console.log(data);

		try {
			const res = await fetch("/api/modificar-password", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				const errorData = await res.json();
				setResponseError(errorData.error);
				setResponseSuccess("");
				console.warn(errorData.error);
				throw new Error(errorData.error);
			}
			if (res.ok) {
				const data = await res.json();
				setResponseSuccess(data.success);
				setResponseError("");
				console.warn(data.success);
			}
		} catch (error) {
			setResponseError(error.message);
			console.error(error.message);
		}
	};

	return (
		<Fade duration={3000}>
			<main className="section-pass-edit">
				<article className="article-pass-edit">
					<Zoom cascade damping={0.2} delay={300}>
						<Image
							src="/img/logo-png.png"
							width={500}
							height={500}
							alt="logo de Orlando Rojas"
							className="logo-sm"
						/>
						<h1>Modificar Contraseña</h1>
					</Zoom>

					<form action="submit" onSubmit={handleSubmit}>
						<Zoom cascade damping={0.2} delay={300} className="w-100 text-l">
							<label htmlFor="password">Contraseña Actual</label>
							<input
								type="text"
								name="password"
								value={password}
								placeholder="Ingrese su Contraseña actual"
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
							<label htmlFor="newPassword">Nueva Contraseña</label>
							<input
								type="password"
								name="newPassword"
								value={newPassword}
								placeholder="Ingrese su nueva Contraseña"
								required
								onChange={(e) => setNewPassword(e.target.value)}
							/>
							<label htmlFor="confirmNewPassword">
								Confirmar Nueva Contraseña
							</label>
							<input
								type="password"
								name="confirmNewPassword"
								value={confirmNewPassword}
								placeholder="Confirme su nueva Contraseña"
								required
								onChange={(e) => setConfirmNewPassword(e.target.value)}
							/>
						</Zoom>
						<div className="button-container">
							<button
								type="submit"
								className="link-button-success"
								onClick={handleSubmit}
							>
								<FaSave />
								Guardar Cambios
							</button>
							<Link href="/" className="link-button">
								<MdHome />
								Volver al Inicio
							</Link>
						</div>
					</form>
					{responseSuccess !== "" && (
						<p className="success">{responseSuccess}</p>
					)}
					{responseError !== "" && <p className="error">{responseError}</p>}
				</article>
			</main>
		</Fade>
	);
}

export default ModificarPassword;
