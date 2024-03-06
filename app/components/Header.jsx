import Image from "next/image";
import "./Header.css";
import Link from "next/link";
import { FaKey } from "react-icons/fa6";


async function Header() {
	return (
		<header>
			
				<div className="main-container">
					<div className="container-logo-abogado">
						<Image
							src="/img/logo-png.png"
							width={500}
							height={500}
							alt="logo de Orlando Rojas"
							className="logo"
						/>
						
						<div className="orlando-container">
							<h3 className="abogado">Abogado</h3>
							<h3 className="orlando">Orlando</h3>
							<h3 className="rojas">Rojas</h3>
						</div>
					</div>
					
					<div className="derecho-container">
						<h2 className="experto-en">Experto en</h2>
						<h2 className="derecho">Derecho de Familia</h2>
						<h2 className="sucesorio">& Sucesorio</h2>
					</div>
					
				</div>
				<div>
					<Link href="/admin">
					<FaKey className="key"/>

						 </Link>
				</div>
			
		</header>
	);
}

export default Header;
