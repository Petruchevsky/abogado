import Image from "next/image";

export default function Loading() {
	return (
		<main>
			<section className="loading-container">
				<h1>Loading...</h1>
				<Image
					src="https://res.cloudinary.com/diqtyq9j2/image/upload/v1710605702/xysrfwbblqiawhne7ipu.jpg"
					alt="loading pic"
					width={500}
					height={500}
					className="img-loading"
				/>
			</section>
		</main>
	);
}