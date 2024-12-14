import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
	darkMode: false,
	toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
	// Retrieve initial theme from localStorage and parse it as boolean
	const [darkMode, setDarkMode] = useState(
	  JSON.parse(localStorage.getItem("darkMode")) || false
	);

	const toggleTheme = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	useEffect(() => {
		// Update the document class and save the current mode to localStorage
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("darkMode", JSON.stringify(darkMode));
	}, [darkMode]);

	return (
	  <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
		  {children}
	  </ThemeContext.Provider>
	);
}
