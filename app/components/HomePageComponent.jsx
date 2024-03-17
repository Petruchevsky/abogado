"use client";
import { FaEdit } from "react-icons/fa";
import { useAuth } from "../context/auth-context";
import Link from "next/link";
import "./HomePageComponent.css";
import { useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";

function HomePageComponent({ props }) {

	const { titulo, descripcion } = props;
	const { getCookie, isLogged, setIsLogged } = useAuth();

	useEffect(() => {
		if (getCookie("AuthCookie")) {
			setIsLogged(getCookie("AuthCookie"));
		}
	}, []);

	useEffect(() => {
		console.warn("isLogged from Home Page: ", isLogged);
	}, []);


	return (
		<main className="main-container-y">
			<Fade duration={3000}>
			<section className="section-home">
				<Slide>
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
				</Slide>
			</section>
			</Fade>
		</main>
	);
}

export default HomePageComponent;
