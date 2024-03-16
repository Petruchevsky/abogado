import SocialComponent from "../components/SocialComponent";


export const metadata = {
	openGraph: {
		title: "Socialmedia",
		description: "Nuestro link al mundo de las redes...",
		images: {
			url: "https://res.cloudinary.com/diqtyq9j2/image/upload/v1710605702/xysrfwbblqiawhne7ipu.jpg",
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
