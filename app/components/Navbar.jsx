"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import { MdHome } from "react-icons/md";
import { MdOutlineQueryStats } from "react-icons/md";
import { TbTextWrapDisabled } from "react-icons/tb";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { BsIncognito } from "react-icons/bs";


function Navbar() {
	
	const pathname = usePathname();
	const [path, setPath] = useState(pathname);

	const handleSmoothScroll = (e)=>{
		const hash = e.currentTarget.hash;
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
				window.history.pushState(null, null, hash);
			}
		}
	}	

	useEffect(() => {
		setPath(pathname);
	}, [pathname]);

	const isActive = (route) =>
		route === path ? " link-button active" : "link-button";

	

	return (
		<nav className="navbar">
			<Link href="/" className={isActive("/")}>
				<MdHome />
				Inicio
			</Link>
			<Link href="/trayectoria" className={isActive("/trayectoria")}>
				<MdOutlineQueryStats />
				Trayectoria
			</Link>
			<Link href="/areas-de-practica" className={isActive("/areas-de-practica")}>
				<TbTextWrapDisabled />
				Areas de Práctica
			</Link>
			<Link href="/poliza-de-privacidad" className={isActive("/poliza-de-privacidad")}>
			<BsIncognito />
				Póliza de Privacidad
			</Link>
			<Link href="/#contacto" className={isActive("/#contacto")} onClick={handleSmoothScroll}>
				<TbMessageCircleQuestion />
				Contacto
			</Link>
		</nav>
	);
}

export default Navbar;
