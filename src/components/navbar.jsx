import SearchBar from "./searchbar.jsx";
import InputDate from "./inputDate.jsx";
import ThemeController from "./themeController.jsx";
import {MapPinOff, MapPinCheck, ThermometerSun} from "lucide-react";
import {ThemeContext} from "../hooks/themeContext.jsx";
import {useContext} from "react";
function Navbar() {
	const {darkMode} = useContext(ThemeContext);
	return (
	  <div className={`navbar ${darkMode ? 'bg-black': 'bg-base-100'}`}>
		  <div className="flex-1 gap-4">
			  <SearchBar/>
			  <InputDate/>
			  <div>
				  <MapPinOff className="hover:cursor-pointer" />
			  </div>
		  </div>
		  <ThemeController/>
		  <div className="dropdown dropdown-hover dropdown-end">
			  <div tabIndex={0} role="button" className="btn m-1">
				  <ThermometerSun />
				  <span className="text-lg">°C</span>
			  </div>
			  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
				  <li className="text-lg">
					  <a>Celsius (°C)</a>
				  </li>
				  <li className="text-lg">
					  <a>Fahrenheit (°F)</a>
				  </li>
			  </ul>
		  </div>
	  </div>
	)
}

export default Navbar;