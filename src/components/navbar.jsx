import SearchBar from "./searchbar.jsx";
import ThemeController from "./themeController.jsx";
import {ThemeContext} from "../hooks/themeContext.jsx";
import {useContext} from "react";
import UnitController from "./unitController.jsx"

function Navbar() {
	const {darkMode, toggleTheme} = useContext(ThemeContext);

	return (
	  <div className={`navbar rounded-2xl px-5 bg-transparent backdrop-blur-lg shadow-lg ${darkMode ? '': ''}`}>
		  <div className="flex-1 gap-4">
			  <SearchBar/>
		  </div>
		  <ThemeController toggleTheme={toggleTheme} />
		  <UnitController />
	  </div>
	)
}

export default Navbar;