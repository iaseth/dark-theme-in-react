import { getFromLocalStorage, LS } from "@/utils";
import React from "react";



export const useDarkTheme = (intial: boolean, localStorageKey: string = "darkTheme"): [boolean, () => void] => {
	const [v, setV] = React.useState(getFromLocalStorage(localStorageKey, intial));
	const toggle = () => setV(x => {
		LS.setItem(localStorageKey, JSON.stringify(!x));
		return !x;
	});

	return [v, toggle];
};

export default useDarkTheme;
