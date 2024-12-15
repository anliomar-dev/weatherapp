import {Globe} from "lucide-react";

import {useContext, useRef, useState} from "react";
import {LocationContext} from "../hooks/locationProvider.jsx";
import Button from "./Button";

/**
 * `MenuSmallScreen` is a small screen search bar component that allows users to search and set a city within the app's location context.
 * It also supports a dark mode and can be closed with a button.
 *
 * @param {function} onClick - Callback function triggered to close the menu.
 * @param {boolean} darkMode - Boolean indicating whether the dark mode is enabled or not.
 * @returns {JSX.Element} A small screen menu with an input field to search for a city and a button to trigger the search.
 */
function MenuSmallScreen({ onClick, darkMode}) {
	const { changeCity } = useContext(LocationContext);
	const [inputCity, setInputCity] = useState("");
	const searchBarRef = useRef();

	const handleCityChange = () => {
		changeCity(inputCity);
		searchBarRef.current.value = "";
		setInputCity("")
		onClick()
	};
	return (
	  <div className="MenuSmallScreen fixed top-20 left-0 py-6 px-5 w-full h-full">
		  <div className={`h-auto flex flex-col gap-y-4 py-5 px-5 
		  rounded-lg shadow-lg ${darkMode ? "bg-white" : "bg-white"}`}
		  >
			  {/* close menu button*/}
			  <Button
			    className="btn-square" onClick={onClick} disabled={false}>
				  <svg
				    xmlns="http://www.w3.org/2000/svg"
				    className="h-6 w-6"
				    fill="none"
				    viewBox="0 0 24 24"
				    stroke="currentColor">
					  <path
					    strokeLinecap="round"
					    strokeLinejoin="round"
					    strokeWidth="2"
					    d="M6 18L18 6M6 6l12 12"/>
				  </svg>
			  </Button>
			  <label className={`input flex items-center gap-2 ${darkMode ? 'bg-dark-input' : 'bg-input'}`}>
				  <Globe className={`${!darkMode ? 'text-dark-foreground' : 'text-foreground'}`}/>
				  <input
				    ref={searchBarRef}
				    type="text"
				    className="text-foreground dark:text-white"
				    placeholder="Enter city"
				    value={inputCity}
				    onChange={
					    (e) => setInputCity(e.target.value)}
				  />
			  </label>
			  {/*cearch button*/}
			  <Button
			    className="btn bg-customPrimary text-white border-customPrimary
				hover:border-customPrimaryHover hover:bg-customPrimaryHover"
			    onClick={handleCityChange}
			    disabled={!inputCity}
			  >
				  Search
			  </Button>
		  </div>
	  </div>
	);
}

export default MenuSmallScreen;