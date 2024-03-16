import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PolizaComponent from "../components/PolizaComponent";


export const metadata = {
	openGraph: {
    title: "Póliza de Privacidad",
    description: "Tu privacidad es muy importante...",
		images: {
			url: "/img/logo.jpeg",
		},
		locale: "es_CL",
		type: "website",
	},
};

function Poliza() {
  return (
    <main>
        <Header />
        <Navbar />
        <PolizaComponent />
        <Footer />
    </main>
  )
}

export default Poliza
