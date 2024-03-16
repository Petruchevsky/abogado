import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TrayectoriaComponente from "../components/TrayectoriaComponent";
import Footer from "../components/Footer";


export const metadata = {
	openGraph: {
		title: "Trayectoria",
		description: "Más de 25 años de Trayectoria Profesional",
		images: {
			url: "https://res.cloudinary.com/diqtyq9j2/image/upload/v1710605702/xysrfwbblqiawhne7ipu.jpg",
		},
		locale: "es_CL",
		type: "website",
	},
};

async function getData() {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/trayectoria`,
			{ cache: "no-store" }
		);

		if (!response.ok) {
			const errorData = await response.json();
			const errorMessage = `Error ${response.status}: ${errorData.message}`;
			throw new Error(errorMessage);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error en getData:", error);
		throw error;
	}
}


async function Trayectoria() {

	const data = await getData();
	const titulo = data?.titulo;
	const descripcion = data?.descripcion;

	return (
		<main className="main-container-y">
			<Header />
			<Navbar />
			<TrayectoriaComponente props={{ titulo, descripcion }} />
			<Footer />
		</main>
	);
}

export default Trayectoria;
