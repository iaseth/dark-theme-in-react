import React from "react";



interface CardsGridProps {
	title: string,
	className?: string,
	children: React.ReactElement[]
}

export default function CardsGrid ({
	title, className="",
	children
}: CardsGridProps) {
	return (
		<section className={`px-4 py-32 ${className}`}>
			<header className="container text-center">
				<h1 className="H5">{title}</h1>
			</header>

			<section className="container grid md:grid-cols-3 gap-6 py-16">{children}</section>
		</section>
	);
}
