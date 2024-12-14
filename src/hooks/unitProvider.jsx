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
			localStorage.setItem("currentUnit", savedUnit); // Enregistrer directement la chaîne de caractères
		}
		return savedUnit; // Pas besoin de JSON.parse pour une simple chaîne
	};

	const [unit, setUnit] = useState(getInitialUnit);

	const toggleUnit = (newUnit) => {
		setUnit(newUnit);
		localStorage.setItem("currentUnit", newUnit); // Sauvegarder la nouvelle unité
	};

	useEffect(() => {
		// Cette partie peut rester mais devient optionnelle si la sauvegarde est faite dans toggleUnit
		localStorage.setItem("currentUnit", unit);
	}, [unit]);

	return (
	  <UnitContext.Provider value={{ unit, toggleUnit }}>
		  {children}
	  </UnitContext.Provider>
	);
}
