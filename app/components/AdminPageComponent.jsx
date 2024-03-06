"use client";
import './AdminPageComponent.css'
import { useAuth } from "@/app/context/auth-context";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


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
                console.log("isLogged: " + isLogged)
				throw Error("Clave Maestra Incorrecta");
			}

            if(response.ok) {
				setCookie("AuthCookie", true)
                console.warn("Modo Admin Activado")
                setIsLogged(getCookie("AuthCookie"));
                setError("");
                console.log("isLogged: " + isLogged)
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
        console.warn("Modo Admin Desactivado")
        console.log("isLogged: " + isLogged)
	}

	useEffect(()=>{
		if(getCookie("AuthCookie")) {
			setIsLogged(getCookie("AuthCookie"));
		}
	}, [])

    useEffect(()=>{
        if(isLogged) {
            console.warn("Modo Admin Activado")
            console.log("isLogged: " + isLogged)
        } else {
            console.warn("Modo Admin Desactivado")
            console.log("isLogged: " + isLogged)
        }
    }, [isLogged])

	return (
		<main>
			<section className="section-admin">
				<article className="article-admin">
                    <Image
                        src="/img/logo-png.png"
                        width={500}
                        height={500}
                        alt="logo de Orlando Rojas"
                        className="logo-admin"
                    />

                    <h2>Bienvenido Orlando</h2>
					<h1>Por favor, ingresa tu clave maestra</h1>
                    

                    <form onSubmit={handleSubmit} className='formulario'>
                        <input
                            type="password"
                            value={claveMaestra}
							placeholder='Ingresa tu Clave Maestra'
                            onChange={(e) => setClaveMaestra(e.target.value)}
                        />
						{ error !== "" && <p className='error'>{ error }</p> }
						{ isLogged && <p className='success'>Ahora estás en Modo Admin y podrás modificar el contenido del sitio</p> }
                        <input type="submit" className={ isLogged ? "hidden" : "link-button-success" } value="Entrar al Modo Admin" />
                        <input type="button" className={ !isLogged ? "hidden" : "link-button-danger" } value="Salir del Modo Admin" onClick={handleClick}/>
                    </form>

					<Link href="/" className='link-button'>Volver al Inicio</Link>
					<Link href="/olvide-mi-contrasena" className='link'><p>¿Olvidaste tu Contraseña...?</p></Link>

                </article>
			</section>
		</main>
	);
}

export default AdminPageComponent;

