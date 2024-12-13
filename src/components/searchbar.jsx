import {Globe} from "lucide-react";
import {useContext, useState, useRef} from "react";
import {LocationContext} from "../hooks/locationProvider.jsx";
import {ThemeContext} from "../hooks/themeContext.jsx";
function SearchBar() {
	const { changeCity } = useContext(LocationContext);
	const [inputCity, setInputCity] = useState("");
	const searchBarRef = useRef();
	const {darkMode} = useContext(ThemeContext);
	const handleCityChange = () => {
		changeCity(inputCity);  // Change city based on input
		searchBarRef.current.value = ""; // Vide l'input après le changement
		setInputCity("")
	};

	return (
	  <>
		  <label className={`input flex items-center gap-2 ${darkMode ? 'bg-dark-input': 'bg-input'}`}>
			  <Globe className={`${darkMode ? 'text-dark-foreground' : 'text-foreground'}`} />
			  <input
			    ref={searchBarRef}
				type="text"
				className={``}
				placeholder="Enter city"
				value={inputCity}
				onChange={
				  (e) => setInputCity(e.target.value)}
			  />
		  </label>
		  <button
		    className="btn bg-customPrimary text-white hover:bg-customPrimaryHover"
		    onClick={handleCityChange}
		    disabled={!inputCity}
		  >
			  Change city
		  </button>
	  </>
	);
}

export default SearchBar;
