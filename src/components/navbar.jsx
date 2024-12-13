import SearchBar from "./searchbar.jsx";
import ThemeController from "./themeController.jsx";
import {ThemeContext} from "../hooks/themeContext.jsx";
import {useContext} from "react";
import UnitController from "./unitController.jsx";

function Navbar() {
	const {darkMode} = useContext(ThemeContext);
	return (
	  <div className={`navbar rounded-2xl px-5 ${darkMode ? 'bg-dark-card': 'bg-background'}`}>
		  <div className="flex-1 gap-4">
			  <SearchBar/>
		  </div>
		  <ThemeController/>
		  <UnitController />
	  </div>
	)
}

export default Navbar;