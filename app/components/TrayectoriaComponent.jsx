"use client";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../context/auth-context";
import { FaEdit } from "react-icons/fa";
import "./TrayectoriaComponent.css";
import { useEffect } from "react";
import { Fade, Zoom } from "react-awesome-reveal";

function TrayectoriaComponente({ props }) {
	const { titulo, descripcion } = props;
	const { getCookie, isLogged, setIsLogged } = useAuth();

	useEffect(() => {
		if (getCookie("AuthCookie")) {
			setIsLogged(getCookie("AuthCookie"));
		}
	}, []);

	useEffect(() => {
		console.warn("isLogged from Trayectoria: ", isLogged);
	}, [isLogged]);

	return (
		<main className="main-container-x">
			<Fade duration={3000}>
				<section className="section-trayectoria">
					<div className="img-div">
						<Image
							src="/img/keanu.jpg"
							alt="Kevin Lomax Image"
							width={1000}
							height={1000}
							className="keanu"
						/>

						<Image
							src="/img/keanu2.jpg"
							alt="Kevin Lomax Image"
							width={1000}
							height={1000}
							className="keanu"
						/>
					</div>

					<article className="article-trayectoria">
						<Zoom cascade damping={0.2} delay={200}>
							<h1>{titulo}</h1>
							<div>
								<pre className="pre-tag">{descripcion}</pre>
							</div>
							<Link
								href="/trayectoria-edit"
								className={isLogged ? "link-button" : "hidden"}
							>
								<FaEdit />
								Editar
							</Link>
						</Zoom>
					</article>
				</section>
			</Fade>
		</main>
	);
}

export default TrayectoriaComponente;
