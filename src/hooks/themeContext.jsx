import { createContext, useState, useEffect } from "react";

/**
 * Context for managing the theme (dark mode) state.
 * Provides access to the current dark mode state and a function to toggle the theme.
 *
 * @typedef {Object} ThemeContextType
 * @property {boolean} darkMode - The current dark mode state (true for dark mode, false for light mode).
 * @property {Function} toggleTheme - Function to toggle the dark mode state.
 */
export const ThemeContext = createContext({
	darkMode: false,
	toggleTheme: () => {},
});


/**
 * ThemeProvider component that provides the dark mode state and
 * the function to toggle the theme via the `ThemeContext`.
 *
 * This component should wrap the parts of the application that need access
 * to the theme context.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Child components that will
 * have access to the ThemeContext.
 *
 * @returns {React.Element} The wrapped children components with access to
 * the theme context.
 */
export function ThemeProvider({ children }) {
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
