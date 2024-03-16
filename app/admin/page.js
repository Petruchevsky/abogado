import AdminPageComponent from "@/app/components/AdminPageComponent";


export const metadata = {
	openGraph: {
		title: "Admin",
		description: "Bienvenido(a) al Modo Administrador",
		images: {
			url: "https://res.cloudinary.com/diqtyq9j2/image/upload/v1710605702/xysrfwbblqiawhne7ipu.jpg",
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

