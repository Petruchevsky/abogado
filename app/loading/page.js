import Image from "next/image";
import Spinner from "../components/Spinner";



export default function Loading() {
	return (
		<main>
			<section className="loading-container">
				<div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'0' }}>
					<h1 style={{ margin:'0 0 0 3rem' }}>Loading</h1><Spinner />
				</div>
				<Image
					src="https://res.cloudinary.com/diqtyq9j2/image/upload/v1710605702/xysrfwbblqiawhne7ipu.jpg"
					alt="loading pic"
					width={500}
					height={500}
					className="loading-img"
				/>
			</section>
		</main>
	);
}