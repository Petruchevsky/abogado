import Image from "next/image";
import Navbar from "./components/Navbar";

export default function NotFound() {
	return (
		<main>
			<section className="not-found-container">
				<Navbar />
				<h1 style={{ color: "red" }}>Error 404 Not Found</h1>
				<h1>La ruta solicitada no existe</h1>
				<Image
					src="https://res.cloudinary.com/diqtyq9j2/image/upload/v1710605702/xysrfwbblqiawhne7ipu.jpg"
					alt="loading pic"
					width={500}
					height={500}
					className="img-404"
				/>
			</section>
		</main>
	);
}
