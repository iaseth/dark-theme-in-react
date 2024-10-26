import './App.css';
import './dark-theme.scss';

import { red } from 'redicons';
import rediconsJson from './redicons.json';
import { MainScreen } from '@/screens';
import { useDarkTheme } from './hooks';
import React from 'react';



red.addIcons(rediconsJson.icons);

export default function App () {
	const [darkTheme, toggleDarkTheme] = useDarkTheme(false);

	React.useEffect(() => {
		const handleKeydown = (ev: KeyboardEvent) => {
			switch (ev.key) {
				case 'd': toggleDarkTheme(); break;
			}
		};

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	}, [toggleDarkTheme]);

	return (
		<div className={`app-root ${darkTheme ? "theme-dark" : "theme-light"}`}>
			<MainScreen />
		</div>
	);
}
