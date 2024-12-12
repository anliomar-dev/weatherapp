import {UnitContext} from "../hooks/unitProvider.jsx";
import {useContext} from "react";
import {ThermometerSun} from "lucide-react";

function UnitController(){
	const {unit, toggleUnit} = useContext(UnitContext);
	return (
	  <div className="dropdown dropdown-hover dropdown-end ms-2">
		  <div tabIndex={0} role="button" className="btn m-1">
			  <ThermometerSun size={22}/>
			  <span className="text-lg">{unit === "metric" ? "°C" : "°F"}</span>
		  </div>
		  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
			  <li className="text-lg">
				  {/* Il faut passer une fonction au lieu d'appeler toggleUnit immédiatement */}
				  <button onClick={() => toggleUnit('metric')}>Celsius (°C)</button>
			  </li>
			  <li className="text-lg">
				  <button onClick={() => toggleUnit('imperial')}>Fahrenheit (°F)</button>
			  </li>
		  </ul>
	  </div>
	)
}

export default UnitController;