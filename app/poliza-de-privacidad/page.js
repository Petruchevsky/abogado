import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./poliza.css"
import Link from "next/link"

export const metadata = {
    title: "Póliza de Privacidad",
    description: "Tu privacidad es muy importante...",
};

function Poliza() {
  return (
    <main>
        <Header />
        <Navbar />
        <section className="section-poliza">
            <article className="article-poliza">
                <h1>Póliza de Privacidad</h1>
                <p>En este sitio web, accesible desde https://abogado.com, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que son recopilados y registrados por abogado.com y cómo la usamos.</p>
                <p>Si tienes preguntas adicionales o necesitas más información sobre nuestra Política de Privacidad, no dudes en contactarte a través del correo electrónico</p>
                <Link className="link-button" style={{ width: "100%"}} href="mailto:hola@mba-digital.cl">Contactar vía Correo electrónico</Link>
            </article>
        </section>
        <Footer />
    </main>
  )
}

export default Poliza
