import {Globe} from "lucide-react";

import {useContext, useRef, useState} from "react";
import {LocationContext} from "../hooks/locationProvider.jsx";

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
	  <div className="fixed top-10 menuSmallScreen bg-white mx- py-3 flex flex-col items-center rounded-lg shadow-lg">
		  <button className="btn btn-square self-start ms-2" onClick={onClick}>
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
		  </button>
		  <div className="flex gap-x-6 px-10 py-5 flex-wrap">
			  <label className={`input flex items-center gap-2 ${darkMode ? 'bg-dark-input' : 'bg-input'}`}>
				  <Globe className={`${!darkMode ? 'text-black' : 'text-white'}`}/>
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
					border-customPrimary hover:border-customPrimaryHover`}
			    onClick={handleCityChange}
			    disabled={!inputCity}
			  >
				  Search
			  </button>
		  </div>
	  </div>
	);
}

export default MenuSmallScreen;