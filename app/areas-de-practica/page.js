import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AreasComponente from "../components/AreasComponent";


export const metadata = {
	openGraph: {
		title: "Areas de Práctica",
		description: "Listado de las Areas de Práctica del Derecho de Familia y Sucesorio",
		images: {
			url: "/img/logo.jpeg",
		},
		locale: "es_CL",
		type: "website",
	},
};

async function getData() {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/areas-de-practica`,
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

async function AreasPractica() {
	const data = await getData();
	const introduccion = data?.introduccion;
	const derechoFamilia = data?.derechoFamilia;
	const derechoSucesorio = data?.derechoSucesorio;

	return (
		<main className="main-container-y">
			<Header />
			<Navbar />
			<AreasComponente props={{ introduccion, derechoFamilia, derechoSucesorio }} />
			<Footer />
		</main>
	);
}

export default AreasPractica;
