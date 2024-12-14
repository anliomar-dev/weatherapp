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
		changeCity(inputCity);
		searchBarRef.current.value = "";
		setInputCity("")
	};

	return (
	  <>
		  <label className={`input flex items-center gap-2 ${darkMode ? 'bg-dark-input' : 'bg-input'}`}>
			  <Globe className={`${!darkMode ? 'text-dark-foreground' : 'text-foreground'}`}/>
			  <input
				ref={searchBarRef}
				type="text"
				className="text-foreground dark:text-dark-accent-foreground"
				placeholder="Enter city"
				value={inputCity}
				onChange={
					(e) => setInputCity(e.target.value)}
			  />
		  </label>
		  <button
			className={`btn bg-customPrimary text-white hover:bg-customPrimaryHover 
			border-customPrimary hover:border-customPrimaryHover
            `}
			onClick={handleCityChange}
			disabled={!inputCity}
		  >
			  Search
		  </button>


	  </>
	);
}

export default SearchBar;
