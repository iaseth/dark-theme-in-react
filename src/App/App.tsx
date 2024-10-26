import './App.css';
import './dark-theme.scss';

import { red } from 'redicons';
import rediconsJson from './redicons.json';
import { MainScreen } from '@/screens';
import { useDarkTheme } from './hooks';



red.addIcons(rediconsJson.icons);

export default function App () {
	const [darkTheme, toggleDarkTheme] = useDarkTheme(false);

	return (
		<div className={`app-root ${darkTheme ? "theme-dark" : "theme-light"}`} onClick={toggleDarkTheme}>
			<MainScreen />
		</div>
	);
}
