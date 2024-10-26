


interface TextColorTileProps {
	textClass: string
}

export default function TextColorTile ({
	textClass
}: TextColorTileProps) {
	return (
		<section className={`px-6 py-8 text-center ${textClass} rounded`}>
			<h2>{textClass}</h2>
			<p>Text Color</p>
		</section>
	);
}
