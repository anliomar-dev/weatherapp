import {Globe} from "lucide-react";
import {useContext, useState, useRef} from "react";
import {LocationContext} from "../hooks/locationProvider.jsx";
function SearchBar() {
	const { changeCity } = useContext(LocationContext);
	const [inputCity, setInputCity] = useState("");
	const searchBarRef = useRef();
	const handleCityChange = () => {
		changeCity(inputCity);  // Change city based on input
		searchBarRef.current.value = ""; // Vide l'input après le changement
		setInputCity("")
	};

	return (
	  <>
		  <label className="input input-bordered flex items-center gap-2">
			  <Globe />
			  <input
			    ref={searchBarRef}
				type="text"
				className="grow border-border"
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
