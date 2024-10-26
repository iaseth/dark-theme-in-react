import './App.css';
import './dark-theme.scss';

import { red } from 'redicons';
import rediconsJson from './redicons.json';

import { Footer, Header } from './components';
import { useDarkTheme } from './hooks';
import { BackgroundColorTile, CardsGrid, TextColorTile } from './ui';



red.addIcons(rediconsJson.icons);

export default function App () {
	const [theme, toggleDarkTheme] = useDarkTheme({ intial: false });

	return (
		<div className={`app-root select-none ${theme}`}>
			<Header {...{toggleDarkTheme}} />

			<main className="min-h-screen">
				<CardsGrid title='Defaults'>
					<BackgroundColorTile bgClass='bg-default' />
					<TextColorTile textClass='text-default' />
				</CardsGrid>

				<CardsGrid title='Background' className='bg-darker-100'>
					<BackgroundColorTile bgClass='bg-darker-100' />
					<BackgroundColorTile bgClass='bg-darker-200' />
					<BackgroundColorTile bgClass='bg-darker-300' />

					<BackgroundColorTile bgClass='bg-lighter-100' />
					<BackgroundColorTile bgClass='bg-lighter-200' />
					<BackgroundColorTile bgClass='bg-lighter-300' />
				</CardsGrid>

				<CardsGrid title='Text'>
					<TextColorTile textClass='text-darker-100' />
					<TextColorTile textClass='text-darker-200' />
					<TextColorTile textClass='text-darker-300' />

					<TextColorTile textClass='text-lighter-100' />
					<TextColorTile textClass='text-lighter-200' />
					<TextColorTile textClass='text-lighter-300' />
				</CardsGrid>
			</main>

			<Footer />
		</div>
	);
}
