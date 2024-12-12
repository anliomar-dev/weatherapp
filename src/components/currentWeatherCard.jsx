import blob from "/src/assets/images/blob.jpeg";
import { useContext } from "react";
import { UnitContext } from "../hooks/unitProvider.jsx";
import useApi from "../hooks/useApi.jsx";
import {LocationContext} from "../hooks/locationProvider.jsx";

function Forecats() {
	return (
	  <div className="flex gap-12 my-4">
		  <div className="flex flex-col">
			  <span>Wind</span>
			  <span className="font-bold">dfdf km/h</span>
		  </div>
		  <div className="flex flex-col">
			  <span>Humidity</span>
			  <span className="font-bold">33%</span>
		  </div>
		  <div className="flex flex-col">
			  <span>Visibility</span>
			  <span className="font-bold">23 km</span>
		  </div>
		  <div className="flex flex-col">
			  <span>Pressure</span>
			  <span className="font-bold">24 hPa</span>
		  </div>
	  </div>
	);
}

function CurrentWeatherCard() {
	const currentDate = new Date();
	let hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12 || 12;

	// Récupérer les données du contexte
	const { unit } = useContext(UnitContext);
	const { city } = useContext(LocationContext);
	// Utilisation du hook pour récupérer les données météo
	const { weatherData, coordinates } = useApi(null, null, unit);

	return (
	  <div className="border border-red-500 w-[500px] mt-3 rounded-lg shadow-sm p-5">
		  <div className="currentWeatherCard">
			  <div className="flex flex-col">
				  <p>Current weather</p>
				  <p>
					  {hours}:{minutes < 10 ? `0${minutes}` : minutes} {ampm}
				  </p>
			  </div>
			  <div className="flex gap-6 items-center py-5">
				  <img src={blob} alt="weather" />
				  <div className="flex align-top">
					  <span className="text-5xl">temp</span>
					  <span>{unit === "metric" ? "°C" : "°F"}</span>
				  </div>
				  <div className="flex flex-col">
		            <span>
		              <strong>dfdfd</strong>
		            </span>
					  <span>°C</span>
				  </div>
			  </div>
			  <div>
				  <p>
					  The skies will be partly cloudy. The low will be C°.
				  </p>
			  </div>
			  <Forecats />
			  {city ? city : "No city specified"}
			  <p>{coordinates?.lat}</p>
			  <p>{coordinates?.lon}</p>
		  </div>
	  </div>
	);
}

export default CurrentWeatherCard;
