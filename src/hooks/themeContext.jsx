import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
	"darkMode": false,
	toggleTheme: () => {},
})


export function ThemeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const toggleTheme = () => {
		setDarkMode(!darkMode);
	};

	// Utilisation de useEffect pour changer le background du body
	useEffect(() => {
		localStorage.setItem("darkMode", JSON.stringify(darkMode));
		darkMode ? document.documentElement.classList.add("dark") :
		  document.documentElement.classList.remove("dark");
	}, [darkMode]);

	return (
	  <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
		  {children}
	  </ThemeContext.Provider>
	);
}