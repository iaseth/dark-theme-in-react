


interface HeaderProps {
	toggleDarkTheme: () => void
}

export default function Header ({
	toggleDarkTheme
}: HeaderProps) {
	return (
		<header className="bg-darker-100 px-2 py-5 text-center">
			<h4 onClick={toggleDarkTheme}>Start</h4>
		</header>
	);
}
