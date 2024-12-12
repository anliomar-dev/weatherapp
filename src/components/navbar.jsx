import SearchBar from "./searchbar.jsx";
import ThemeController from "./themeController.jsx";
import {MapPinOff, MapPinCheck} from "lucide-react";
import {ThemeContext} from "../hooks/themeContext.jsx";
import {useContext} from "react";
import UnitController from "./unitController.jsx";

function Navbar() {
	const {darkMode} = useContext(ThemeContext);
	return (
	  <div className={`navbar border rounded-2xl px-5 ${darkMode ? 'bg-black': 'bg-base-100'}`}>
		  <div className="flex-1 gap-4">
			  <SearchBar/>
			  <div>
				  <MapPinOff className="hover:cursor-pointer" />
			  </div>
		  </div>
		  <ThemeController/>
		  <UnitController />
	  </div>
	)
}

export default Navbar;