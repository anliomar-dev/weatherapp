import {Globe} from "lucide-react";
import {useContext, useState, useRef, useEffect} from "react";
import {LocationContext} from "../hooks/locationProvider.jsx";
import {ThemeContext} from "../hooks/themeContext.jsx";
import BurgerIcon from "./BurgerIcon.jsx";
import {createPortal} from "react-dom";
import Menusmallscreen from "./menusmallscreen.jsx";

function SearchBar() {
	const { changeCity } = useContext(LocationContext);
	const [inputCity, setInputCity] = useState("");
	const searchBarRef = useRef();
	const {darkMode} = useContext(ThemeContext);
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const handleCityChange = () => {
		changeCity(inputCity);
		searchBarRef.current.value = "";
		setInputCity("")
	};
	// show or hide menu on small screen
	const handleShowMenu = () => {
		setMenuIsOpen(!menuIsOpen);
	}
	{/*hide the menu when the window is enlarged*/}
	useEffect(() => {
		const checkScreenSize = () => {
			if(window.innerWidth >= 768 && menuIsOpen) {
				setMenuIsOpen(false);
			}
		};
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, [menuIsOpen]);

	return (
	  <>
		  <label className={`input search-bar flex items-center gap-2 ${darkMode ? 'bg-dark-input' : 'bg-input'}`}>
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
			className={`btn search-button bg-customPrimary text-white hover:bg-customPrimaryHover 
			border-customPrimary hover:border-customPrimaryHover
            `}
			onClick={handleCityChange}
			disabled={!inputCity}
		  >
			  Search
		  </button>
		  {!menuIsOpen && (
		    <BurgerIcon onChange={handleShowMenu} isMenuOpen={menuIsOpen} />
		  )}
		  {menuIsOpen && (
		    <>
			    {createPortal(
			      <div className="flex justify-center px-10 w-full">
				      <Menusmallscreen onClick={handleShowMenu} darkMode={darkMode} />
			      </div>,
				  document.body
			    )}
			    {/*overlay while menu is display in small screen*/}
			    {createPortal(
				  <div className="fixed top-0 left-0 overlay w-full h-full bg-neutral-800 opacity-70">
					  <h1></h1>
				  </div>,
				  document.body
			    )}
		    </>
		  )}

	  </>
	);
}

export default SearchBar;
