import {Globe} from "lucide-react";
import {useContext, useState} from "react";
import {LocationContext} from "../hooks/locationProvider.jsx";
function SearchBar() {
	const { changeCity } = useContext(LocationContext);
	const [inputCity, setInputCity] = useState("");

	const handleCityChange = () => {
		changeCity(inputCity);  // Change city based on input
	};

	return (
	  <>
		  <label className="input input-bordered flex items-center gap-2">
			  <Globe />
			  <input
				type="text"
				className="grow border-border"
				placeholder="Enter city"
				value={inputCity}
				onChange={(e) => setInputCity(e.target.value)} // Update input value
			  />
		  </label>
		  <button className="btn btn-primary" onClick={handleCityChange}>Change city</button>
	  </>
	);
}

export default SearchBar;
