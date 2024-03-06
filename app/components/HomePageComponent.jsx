"use client";
import { FaEdit } from "react-icons/fa";
import { useAuth } from "../context/auth-context";
import Link from "next/link";
import "./HomePageComponent.css";
import { useEffect } from "react";

function HomePageComponent({ props }) {

	const { titulo, descripcion } = props;
	const { getCookie, isLogged, setIsLogged } = useAuth();

	useEffect(() => {
		if (getCookie("AuthCookie")) {
			setIsLogged(getCookie("AuthCookie"));
		}
	}, [getCookie("AuthCookie")]);

	useEffect(() => {
		console.warn("isLogged from Home Page: ", isLogged);
	}, [isLogged]);


	return (
		<main className="main-container-y">
			<section className="section-home">
				<article className="article-home">
					<h1>{titulo}</h1>
					<div><pre className="pre-tag">{descripcion}</pre></div>
					<Link
						href="/home-edit"
						className={isLogged ? "link-button" : "hidden"}
					>
						<FaEdit />
						Editar
					</Link>
				</article>
			</section>
		</main>
	);
}

export default HomePageComponent;
