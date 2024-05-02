import FormContact from "../components/FormContact"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
	title: "Contacto",
	description: "Mantenemos el contacto contigo...",
};


function Contact() {
  return (
    <main id='contacto'>
      <Header />
      <Navbar />
      <FormContact />
      <Footer />
    </main>
  )
}

export default Contact
