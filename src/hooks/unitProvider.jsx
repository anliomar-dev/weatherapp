import { createContext, useState, useEffect } from "react";

// Créer le contexte avec une valeur par défaut
export const UnitContext = createContext({
	unit: "metric",
	toggleUnit: () => {},
});

export function UnitProvider({ children }) {
	// Récupérer l'unité depuis localStorage, ou utiliser "metric" par défaut
	const getInitialUnit = () => {
		let savedUnit = localStorage.getItem("currentUnit");
		if (!savedUnit) {
			// Si la clé n'existe pas, on la définit avec la valeur "metric"
			savedUnit = "metric";
			localStorage.setItem("currentUnit", JSON.stringify(savedUnit));
		}
		return JSON.parse(savedUnit);
	};

	const [unit, setUnit] = useState(getInitialUnit);

	const toggleUnit = (newUnit) => {
		setUnit(newUnit);
	};

	useEffect(() => {
		// Sauvegarder l'unité dans le localStorage à chaque changement
		localStorage.setItem("currentUnit", JSON.stringify(unit));
	}, [unit]);

	return (
	  <UnitContext.Provider value={{ unit, toggleUnit }}>
		  {children}
	  </UnitContext.Provider>
	);
}
