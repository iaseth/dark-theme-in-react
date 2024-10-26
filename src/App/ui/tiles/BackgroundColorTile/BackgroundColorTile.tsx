


interface BackgroundColorTileProps {
	bgClass: string
}

export default function BackgroundColorTile ({
	bgClass
}: BackgroundColorTileProps) {
	return (
		<section className={`px-6 py-8 text-center ${bgClass} rounded`}>
			<h2>{bgClass}</h2>
			<p>Background</p>
		</section>
	);
}
