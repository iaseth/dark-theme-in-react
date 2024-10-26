import { getFromLocalStorage, LS } from "@/utils";
import React from "react";



interface useDarkThemeProps {
	intial: boolean,
	keyBoardShortCut?: string,
	localStorageKey?: string
}

export const useDarkTheme = ({
	intial,
	keyBoardShortCut='D',
	localStorageKey="darkTheme"
}: useDarkThemeProps): [string, () => void] => {
	const [darkTheme, setDarkTheme] = React.useState(getFromLocalStorage(localStorageKey, intial));
	const theme = darkTheme ? "theme-dark" : "theme-light";

	const toggleDarkTheme = () => setDarkTheme(x => {
		LS.setItem(localStorageKey, JSON.stringify(!x));
		return !x;
	});

	React.useEffect(() => {
		const handleKeydown = (ev: KeyboardEvent) => {
			switch (ev.key.toUpperCase()) {
				case keyBoardShortCut.toUpperCase(): toggleDarkTheme(); break;
			}
		};

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	}, [toggleDarkTheme]);

	return [theme, toggleDarkTheme];
};

export default useDarkTheme;
