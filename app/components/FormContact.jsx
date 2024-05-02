"use client";
import { useState } from "react";
import "./FormContact.css";
import { LiaTelegramPlane } from "react-icons/lia";
import { Slide, Zoom } from "react-awesome-reveal";

function FormContact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [errorMsg, setErrorMsg] = useState(null);
	const [successMsg, setSuccessMsg] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMsg(null);
		setSuccessMsg("Estamos enviando tu mensaje...");

		const data = { name, email, subject, message }; // Definir data

		try {
			const res = await fetch("/api/mailer", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				throw new Error("Algo salió Mal con tu Email");
			}

			setSuccessMsg("Mensaje Enviado Exitosamente!");

			setTimeout(() => {
				setName("");
				setEmail("");
				setSubject("");
				setMessage("");
				setSuccessMsg("Te responderemos lo antes posible!");
			}, 2500);
		} catch (error) {
			setErrorMsg("Error al enviar el mensaje");
			console.log(error.message);

			setTimeout(() => {
				setName("");
				setEmail("");
				setSubject("");
				setMessage("");
				setErrorMsg("Por favor refresca la página, e inténtalo de nuevo...");
			}, 4000);
		}
	};

	return (
		<main className="main-container-contact">
			<setcion className="section-contact m-auto">
                <Zoom>
                    <h1 className="title">Contacto</h1>
                </Zoom>
                <form onSubmit={handleSubmit}>
                    <Slide className="w-100 text-l">
                        {" "}
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            value={name}
                            placeholder="Ingresa tu Nombre"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Slide>
                    <Slide direction="right" className="w-100 text-l">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Ingresa tu Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Slide>
                    <Slide className="w-100 text-l">
                        <label htmlFor="subject">Asunto</label>
                        <input
                            type="text"
                            value={subject}
                            placeholder="Asunto"
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </Slide>
                    <Slide direction="right" className="w-100 text-l">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            value={message}
                            placeholder="Escribe tu Mensaje..."
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </Slide>
                    <Slide className="w-100 text-l">
                        <button className="link-button m-auto" type="submit">
                            <LiaTelegramPlane />
                            Enviar Mensaje
                        </button>
                    </Slide>
                
                    {successMsg && <p className="successMsg">{successMsg}</p>}
                    {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                </form>
            </setcion>
		</main>
	);
}

export default FormContact;
