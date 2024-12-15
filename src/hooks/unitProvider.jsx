import { createContext, useState, useEffect } from "react";


/**
 * Context for managing the unit of measurement (e.g., metric or imperial).
 * Provides access to the current unit and a function to toggle between units.
 *
 * @typedef {Object} UnitContextType
 * @property {string} unit - The current unit of measurement ("metric" or "imperial").
 * @property {Function} toggleUnit - Function to toggle the unit between "metric" and "imperial".
 */
export const UnitContext = createContext({
	unit: "metric",
	toggleUnit: () => {},
});


/**
 * UnitProvider component that provides the unit of measurement state
 * and the function to toggle the unit via the `UnitContext`.
 *
 * This component should wrap the parts of the application that need access
 * to the unit context.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Child components that will
 * have access to the UnitContext.
 *
 * @returns {React.Element} The wrapped children components with access to
 * the unit context.
 */
export function UnitProvider({ children }) {

	const getInitialUnit = () => {
		let savedUnit = localStorage.getItem("currentUnit");
		if (!savedUnit) {
			savedUnit = "metric";
			localStorage.setItem("currentUnit", savedUnit);
		}
		return savedUnit;
	};

	const [unit, setUnit] = useState(getInitialUnit);

	const toggleUnit = (newUnit) => {
		setUnit(newUnit);
		localStorage.setItem("currentUnit", newUnit);
	};

	useEffect(() => {
		localStorage.setItem("currentUnit", unit);
	}, [unit]);

	return (
	  <UnitContext.Provider value={{ unit, toggleUnit }}>
		  {children}
	  </UnitContext.Provider>
	);
}
