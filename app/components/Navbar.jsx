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
import { Zoom } from "react-awesome-reveal";


function Navbar() {
	
	const pathname = usePathname();
	const [path, setPath] = useState(pathname);

	useEffect(() => {
		setPath(pathname);
	}, [pathname]);

	const isActive = (route) =>
		route === path ? " link-button active" : "link-button";

	

	return (
		<nav className="navbar">
				<Zoom cascade damping={0.1}>
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
				Áreas de Práctica
			</Link>
			<Link href="/poliza-de-privacidad" className={isActive("/poliza-de-privacidad")}>
			<BsIncognito />
				Póliza de Privacidad
			</Link>
			<Link href="/contacto" className={isActive("/contacto")}>
				<TbMessageCircleQuestion />
				Contacto
			</Link>
		</Zoom>
		</nav>
	);
}

export default Navbar;
