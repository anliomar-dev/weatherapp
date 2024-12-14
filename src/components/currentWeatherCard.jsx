import {useContext, useEffect, useState} from "react";
import useApi from "../hooks/useApi.jsx";

import { LocationContext } from "../hooks/locationProvider.jsx";
import {ThemeContext} from "../hooks/themeContext.jsx";
import { UnitContext } from "../hooks/unitProvider.jsx";

import WeatherDetails from "./weatherDetails.jsx";
import WeatherMainInfos from "./WeatherMainInfos.jsx";
import WeatherCardHeader from "./WeatherCardHeader.jsx";
import Alert from "./alert.jsx";

import { getCityCordinates } from "../../utils.js";
import WeatherMap from "./WeatherMap.jsx";



function CurrentWeatherCard() {
	const { unit } = useContext(UnitContext);
	const { city } = useContext(LocationContext);
	const { weatherData, loading, coordinates, setCoordinates } = useApi(null, null, unit);
	const {darkMode} = useContext(ThemeContext);
	const [isCityExist, setIsCityExist] = useState(coordinates.lat && coordinates.lon);

	useEffect(() => {
		if (city) {
			const fetchCoordinates = async () => {
				try {
					const data = await getCityCordinates(city);
					if(data.lat && data.lon) {
						setCoordinates({ lat: data.lat, lon: data.lon, unit });
						setIsCityExist(true);
					}else{
						setIsCityExist(false);
					}
				} catch (err) {
					console.error("Error fetching coordinates:", err);
				}
			};
			fetchCoordinates();
		}
	}, [city, setCoordinates, coordinates.lat, coordinates.lon, unit, isCityExist]);

	// Handle case where city is undefined, null or empty
	if (!city) {
		return(
		  <Alert darkMode={darkMode} message={`Veuillez specifier une ville!`} />
		  )
	}
	// handle case city does not exist
	if (!isCityExist) {
		return(
		  <Alert darkMode={darkMode} message={`Ville introuvable !`} />
		)
	}

	return (
	  <div className="flex flex-col lg:flex-row gap-4 pt-6">
		  <div
			className={`lg:w-[800px] w-full weather-card rounded-lg p-5 bg-transparent backdrop-blur-lg shadow-lg ${darkMode ? '' : ''}`}>
			  {!loading ? (
				  <div className="currentWeatherCard">
					  <WeatherCardHeader
						timezone={weatherData?.timezone}
						city={city.charAt(0).toUpperCase() + city.slice(1)}
					  />
					  <WeatherMainInfos
						unit={unit}
						feels_like={weatherData?.main?.feels_like ?? "N/A"}
						description={weatherData?.weather[0]?.description ?? "N/A"}
						tempeture={weatherData?.main?.temp ?? "N/A"}
						weatherIcon={weatherData?.weather[0]?.icon}
					  />
					  {weatherData && weatherData.wind && (
						<WeatherDetails
						  city={city}
						  wind={unit === "metric" ? `${(weatherData.wind.speed * 3.6).toFixed(2)}` : `${weatherData.wind.speed}`}
						  windUnit={unit === "metric" ? "Km/h" : "mph"}
						  humidity={weatherData.main.humidity}
						  visibility={(weatherData.visibility / 1000).toFixed(1)}
						  pressure={weatherData.main.pressure}
						/>
					  )}
				  </div>
				) :
				<div className="flex justify-center items-center py-6">
					<span className="loading loading-ring loading-lg bg-customPrimary"></span>
				</div>
			  }
		  </div>
		  <WeatherMap lat={coordinates.lat} lon={coordinates.lon} />
	  </div>
	);
}

export default CurrentWeatherCard;
