"use client";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
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

					<Link
						className="link"
						style={{ textDecoration: "none" }}
						href="/trayectoria"
					>
						<h3 className="leonorBFooter">Orlando Rojas</h3>
						<h3 className="leonorBFooter">Abogado</h3>
					</Link>

					<div className="datos">
						<div style={{ display:"flex", gap:"1rem"}}>
							<BsFillTelephoneInboundFill /><FaWhatsapp />
						</div>
						<Link className="link" href="https://wa.me/56993323285?text=Hola%20Orlando,%20necesito%20de%20tu%20asesoría%20lo%20más%20pronto%20posible.%20Espero%20me%20contactes%20cuanto%20antes." target="_blank">
							+569 9332 3285
						</Link>
						<IoMdMailUnread />
						<Link className="link" href="mailto:abogado@orlandorojas.cl">
							abogado@orlandorojas.cl
						</Link>
						<FaMapLocationDot />
						<Link
							target="_blank"
							className="link"
							href="https://maps.app.goo.gl/5VQo9PFpewpDxEDc7"
						>
							Av. Reñaca Norte 25, Of. 1106, Viña del Mar, V Región
						</Link>
						<Link
							target="_blank"
							className="link"
							href="https://maps.app.goo.gl/dpHq3y18mw74etrT7"
						>
							Huérfanos 1373, Of. 803, Santiago, RM
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
					<Link href="https://www.moises-web.cl/">Diseño y Desarrollo por MOISES-WEB</Link>
					<Link href="/">Orlando Rojas &copy;</Link>
					<Link href="/poliza-de-privacidad">Póliza de Privacidad</Link>
				</section>
			</Zoom>
		</footer>
	);
}

export default Footer;
