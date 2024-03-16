"use client";
import Link from "next/link";
import { useAuth } from "../context/auth-context";
import { FaEdit } from "react-icons/fa";
import "./AreasComponent.css";
import { useEffect } from "react";
import { Slide, Zoom } from "react-awesome-reveal";

function AreasComponente({ props }) {
	const { introduccion, derechoFamilia, derechoSucesorio } = props;
	const { getCookie, isLogged, setIsLogged } = useAuth();

	useEffect(() => {
		if (getCookie("AuthCookie")) {
			setIsLogged(getCookie("AuthCookie"));
		}
	}, []);

	useEffect(() => {
		console.warn("isLogged from Areas de Práctica: ", isLogged);
	}, [isLogged]);

	return (
		<main className="main-container-y">

			<Slide cascade>
				<section className="section-introduccion">
					<h1>Áreas de Práctica</h1>
					<p style={{textAlign: 'center'}}>{introduccion}</p>
				</section>
						 
				<section className="section-areas main-container-y">
					<div className="main-container-x div-x-areas">
						<article className="article-area">
							<Zoom cascade delay={200}>
								<h1>Derecho de Familia</h1>
								<div>
									<pre className="pre-tag">{derechoFamilia}</pre>
								</div>
							</Zoom>
						</article>
						<article className="article-area">
							<Zoom cascade delay={200}>
								<h1>Derecho de Sucesorio</h1>
								<div>
									<pre className="pre-tag">{derechoSucesorio}</pre>
								</div>
							</Zoom>
						</article>
					</div>
				
					<Link
						href="/areas-edit"
						className={isLogged ? "link-button" : "hidden"}
					>
						<FaEdit />
						Editar
					</Link>
				</section>
			</Slide>
		</main>
	);
}

export default AreasComponente;
