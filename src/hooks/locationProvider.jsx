import { useState, createContext } from 'react';

// Créer un contexte avec une valeur par défaut
export const LocationContext = createContext({
	city: "",
	changeCity: () => {},
});

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
