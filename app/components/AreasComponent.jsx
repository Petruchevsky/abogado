"use client";
import Link from "next/link";
import { useAuth } from "../context/auth-context";
import { FaEdit } from "react-icons/fa";
import "./AreasComponent.css";
import { useEffect } from "react";

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

			<section className="section-introduccion">
				<h1>Áreas de Práctica</h1>
				<p style={{textAlign: 'center'}}>{introduccion}</p>
			</section>
            
			<section className="section-areas main-container-y">
				<div className="main-container-x div-x-areas">
					<article className="article-area">
						<h1>Derecho de Familia</h1>
						<div>
							<pre className="pre-tag">{derechoFamilia}</pre>
						</div>
					</article>
					<article className="article-area">
						<h1>Derecho de Sucesorio</h1>
						<div>
							<pre className="pre-tag">{derechoSucesorio}</pre>
						</div>
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
		</main>
	);
}

export default AreasComponente;
