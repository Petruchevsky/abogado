import AdminPageComponent from "@/app/components/AdminPageComponent";


export const metadata = {
	openGraph: {
		title: "Admin",
		description: "Bienvenido(a) al Modo Administrador",
		images: {
			url: "/img/logo.jpeg",
		},
		locale: "es_CL",
		type: "website",
	},
};

function AdminPage() {

	return (
		<main>
			<AdminPageComponent />
		</main>
	);
}

export default AdminPage;

