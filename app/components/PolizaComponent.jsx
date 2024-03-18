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
							<Zoom cascade damping={0.1} delay={0}>
								<h1>Póliza de Privacidad</h1>

								<div>
									<h1>Datos personales recopilados</h1>
									<p>
										Recopilamos y procesamos los siguientes datos personales con
										su consentimiento: Información de contacto (nombre,
										dirección, correo electrónico, teléfono) Datos relacionados
										con asuntos legales (documentación, información sobre el
										caso, correspondencia) Información financiera (en el caso de
										honorarios y pagos).
									</p>
								</div>
								<div>
									<h1>Finalidad del procesamiento</h1>
									<p>
										Utilizamos sus datos personales para los siguientes
										propósitos:<br></br>- Gestionar y llevar a cabo asuntos
										legales y consultas<br></br>- Proporcionar asesoramiento
										legal y representación en casos familiares, civiles y
										sucesorios<br></br>- Facturación y gestión de pagos<br></br>
										- Comunicarnos con usted y responder a sus solicitudes
									</p>
								</div>
								<div>
									<h1>Divulgación de datos personales</h1>
									<p>
										No compartimos sus datos personales con terceros, salvo
										cuando sea necesario para los fines mencionados
										anteriormente o cuando estemos legalmente obligados a
										hacerlo.
									</p>
								</div>
								<div>
									<h1>Seguridad de datos</h1>
									<p>
										Tomamos medidas para proteger sus datos personales contra el
										acceso no autorizado, la divulgación, la alteración o la
										destrucción. Utilizamos tecnologías seguras y procedimientos
										adecuados para garantizar la seguridad de la información que
										recopilamos.
									</p>
								</div>
								<div>
									<h1>Retención de datos</h1>
									<p>
										Mantenemos sus datos personales durante el tiempo necesario
										para cumplir con los fines para los que fueron recopilados,
										a menos que se requiera un período de retención más largo
										por razones legales o fiscales.
									</p>
								</div>
								<div>
									<h1>Derechos del titular de los datos</h1>
									<p>
										Usted tiene derecho a acceder, corregir, actualizar o
										eliminar sus datos personales en cualquier momento. También
										puede ejercer su derecho a la portabilidad de datos y
										oponerse al procesamiento de sus datos en ciertas
										circunstancias.
									</p>
								</div>
								<div>
									<h1>Cambios en la política de privacidad</h1>
									<p>
										Nos reservamos el derecho de actualizar o modificar nuestra
										política de privacidad en cualquier momento. Le informaremos
										sobre cualquier cambio significativo mediante un aviso en
										nuestro sitio web o por otros medios de comunicación.
									</p>
								</div>

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
