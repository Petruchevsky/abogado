import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePageComponent from "./components/HomePageComponent";
import Contact from "./contacto/page";


export const metadata = {
	title: "Inicio",
	description: "Experto en Derecho Familiar y Sucesorio",
};

async function getData() {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/home`,
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

async function Home() {
	const data = await getData();
	const titulo = data?.titulo;
	const descripcion = data?.descripcion;

	return (
		<main className="main-container-y">
			<Header />
			<Navbar />
			<HomePageComponent props={{ titulo, descripcion }} />
			<Contact />
			<Footer />
		</main>
	);
}

export default Home;
