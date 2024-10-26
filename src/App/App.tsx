import './App.css';
import './dark-theme.scss';

import { red } from 'redicons';
import rediconsJson from './redicons.json';

import { Footer, Header } from './components';
import { useDarkTheme } from './hooks';



red.addIcons(rediconsJson.icons);

export default function App () {
	const [darkTheme, toggleDarkTheme] = useDarkTheme({ intial: false });

	return (
		<div className={`app-root select-none ${darkTheme ? "theme-dark" : "theme-light"}`}>
			<Header {...{toggleDarkTheme}} />

			<main className="min-h-screen px-4 py-20">
				<section className='container grid md:grid-cols-3'>
					<h1>This is some text</h1>
				</section>
			</main>

			<Footer />
		</div>
	);
}
