"use client";
import React from "react";
import Link from "next/link";
import "./Poliza.css";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

function PolizaComponent() {
	return (
		<main>
			<Fade duration={3000}>
				<section className="section-poliza">
					<Slide>
						<article className="article-poliza">
							<Zoom cascade damping={0.2} delay={200}>
                                <h1>Póliza de Privacidad</h1>
                                
                                <p>
                                    En este sitio web, accesible desde https://abogado.com, una de
                                    nuestras principales prioridades es la privacidad de nuestros
                                    visitantes. Este documento de Política de Privacidad contiene
                                    tipos de información que son recopilados y registrados por
                                    abogado.com y cómo la usamos.
                                </p>
                                
                                <p>
                                    Si tienes preguntas adicionales o necesitas más información
                                    sobre nuestra Política de Privacidad, no dudes en contactarte a
                                    través del correo electrónico
                                </p>
                                <Link
                                    className="link-button"
                                    style={{ width: "100%" }}
                                    href="mailto:hola@mba-digital.cl"
                                >
                                    Contactar vía Correo electrónico
                                </Link>
                            </Zoom>
						</article>
					</Slide>
				</section>
			</Fade>
		</main>
	);
}

export default PolizaComponent;
