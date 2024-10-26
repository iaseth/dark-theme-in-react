import './App.css';
import './dark-theme.scss';

import { red } from 'redicons';
import rediconsJson from './redicons.json';

import { Footer, Header } from './components';
import { useDarkTheme } from './hooks';
import { BackgroundTile } from './ui';



red.addIcons(rediconsJson.icons);

export default function App () {
	const [darkTheme, toggleDarkTheme] = useDarkTheme({ intial: false });

	return (
		<div className={`app-root select-none ${darkTheme ? "theme-dark" : "theme-light"}`}>
			<Header {...{toggleDarkTheme}} />

			<main className="min-h-screen px-4 py-20">
				<section className='container cards-grid'>
					<BackgroundTile bgClass='bg-darker-100' />
					<BackgroundTile bgClass='bg-darker-200' />
					<BackgroundTile bgClass='bg-darker-300' />

					<BackgroundTile bgClass='bg-lighter-100' />
					<BackgroundTile bgClass='bg-lighter-200' />
					<BackgroundTile bgClass='bg-lighter-300' />

					<BackgroundTile bgClass='bg-default' />
				</section>
			</main>

			<Footer />
		</div>
	);
}
