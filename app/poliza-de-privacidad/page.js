import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PolizaComponent from "../components/PolizaComponent";

export const metadata = {
    title: "Póliza de Privacidad",
    description: "Tu privacidad es muy importante...",
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
