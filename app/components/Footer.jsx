"use client";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { Zoom } from "react-awesome-reveal";

async function Footer() {
	return (
			<footer>
					{" "}
					<section className="section-footer">
						<Zoom cascade damping={0.1}>
							<Link href="/">
								<Image
									src="/img/logo-png.png"
									width={300}
									height={300}
									alt="logo de abogado"
									className="logo-footer"
								/>
							</Link>
						
							<Link style={{ textDecoration: "none" }} href="/trayectoria">
								<h3 className="leonorBFooter">Orlando Rojas</h3>
								<h3 className="leonorBFooter">Abogado</h3>
							</Link>
						

						
							<div className="datos">
								<BsFillTelephoneInboundFill />
								<Link className="link" href="tel:+56975174057">
									+569 7517 4057
								</Link>
								<IoMdMailUnread />
								<Link className="link" href="mailto:hola@mba-digital.cl">
									hola@abogado.com
								</Link>
								<FaMapLocationDot />
								<Link
									className="link"
									href="https://maps.app.goo.gl/Vybj84LuWoaJ3vQn6"
								>
									Central Park Avenue #169, Viña del Mar, Chile
								</Link>
							</div>
						
							<div className="RRSS-container">
								<Link href="/socialmedia">
									{" "}
									<Image
										src="/img/face.jpeg"
										width={50}
										height={50}
										alt="icono de facebook"
										className="icon-f"
									/>
								</Link>
							
								<Link href="/socialmedia">
									{" "}
									<Image
										src="/img/insta.png"
										width={50}
										height={50}
										alt="icon de instagram"
										className="icon-i"
									/>
								</Link>
							</div>
						</Zoom>
					</section>
					<Zoom className="w-100">
						<section className="developedBy">
							<Link href="/">Desarrollado por Moises-WEB</Link>
							<Link href="/">Orlando Rojas &copy;</Link>
							<Link href="/poliza-de-privacidad">Póliza de Privacidad</Link>
						</section>
					</Zoom>
			</footer>

	);
}

export default Footer;
