import { useState, createContext } from 'react';

/**
 * Context for managing the location (city) state.
 * Provides access to the current city and a method to change it.
 *
 * @typedef {Object} LocationContextType
 * @property {string} city - The current city.
 * @property {Function} changeCity - Function to update the current city.
 */
export const LocationContext = createContext({
	city: "",
	changeCity: () => {},
});


/**
 * LocationProvider component that provides the location (city) state and
 * the function to update the city via the `LocationContext`.
 *
 * This component should wrap the parts of the application that need access
 * to the location context.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Child components that will
 * have access to the LocationContext.
 *
 * @returns {React.Element} The wrapped children components with access to
 * the location context.
 */
export function LocationProvider({ children }) {
	// Initialisation de l'état avec useState
	const [city, setCity] = useState("")

	const changeCity = (newCity) => {
		setCity(newCity);
	}

	return (
	  <LocationContext.Provider value={{ city, changeCity }}>
		  {children}
	  </LocationContext.Provider>
	);
}
