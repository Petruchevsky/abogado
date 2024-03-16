import SocialComponent from "../components/SocialComponent";


export const metadata = {
	openGraph: {
		title: "Socialmedia",
		description: "Nuestro link al mundo de las redes...",
		images: {
			url: "/img/logo.jpeg",
		},
		locale: "es_CL",
		type: "website",
	},
};

function Socialmedia() {
	return (
		<SocialComponent />
	);
}

export default Socialmedia;
