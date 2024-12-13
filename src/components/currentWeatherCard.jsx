import { useContext, useEffect } from "react";
import { UnitContext } from "../hooks/unitProvider.jsx";
import useApi from "../hooks/useApi.jsx";
import { LocationContext } from "../hooks/locationProvider.jsx";
import { getCityCordinates } from "../../utils.js";
import WeatherDetails from "./weatherDetails.jsx";
import {MapPinCheck} from "lucide-react"
import {getCityTime} from "../../utils.js";

function CurrentWeatherCard() {
	const { unit } = useContext(UnitContext);
	const { city } = useContext(LocationContext);
	const { weatherData, loading, coordinates, setCoordinates } = useApi(null, null, unit);

	useEffect(() => {
		if (city) {
			const fetchCoordinates = async () => {
				try {
					const data = await getCityCordinates(city);
					if(data.lat && data.lon) {
						setCoordinates({ lat: data.lat, lon: data.lon, unit });
					}
				} catch (err) {
					console.error("Error fetching coordinates:", err);
				}
			};
			fetchCoordinates();
		}
	}, [city, setCoordinates, coordinates.lat, coordinates.lon, unit]);

	// Handle case where city is undefined, null or empty
	if (!city) {
		return (
		  <div role="alert" className="alert flex justify-center p-5 mt-6">
			  <span className="text-xl">Veuillez specifier une ville!</span>
		  </div>
		);
	}

	if (!weatherData) {
		return (
		  <div role="alert" className="alert flex justify-center p-5 mt-6">
			  <span className="text-xl">Ville introuvable !</span>
		  </div>
		);
	}

	return (
	  <div className="w-[800px] mt-3 rounded-lg shadow-sm p-5 bg-card dark:bg-dark-card">
		  {!loading ? (
		    <div className="currentWeatherCard">
			    <div className="flex justify-between items-start w-full px-6 py-2">
				    <div className="flex flex-col">
					    <p className="text-2xl">Current weather</p>
					    <p className="text-lg font-medium">
						    {getCityTime(weatherData?.timezone)}
					    </p>
				    </div>
				    <div className="self-start flex items-center gap-2">
					    <MapPinCheck/>
					    <p className="text-2xl">{city.charAt(0).toUpperCase() + city.slice(1)}</p>
				    </div>
			    </div>
			    <div className="flex gap-6 items-center py-5">
				    <img src={`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
				         alt="weather"/>
				    <div className="flex align-top">
					    <span className="text-5xl">{weatherData?.main?.temp ?? "N/A"}</span>
					    <span className="text-2xl">{unit === "metric" ? "°C" : "°F"}</span>
				    </div>
				    <div className="flex flex-col">
						<span>
							<p className="text-xl font-medium">{weatherData?.weather[0]?.description}</p>
						</span>
					    <span
						  className="text-lg">feels like {weatherData?.main?.feels_like ?? "N/A"} {unit === "metric" ? "°C" : "°F"}</span>
				    </div>
			    </div>
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
		  ):
		    <div className="flex justify-center items-center py-6">
			    <span className="loading loading-ring loading-lg bg-customPrimary"></span>
		    </div>
		  }
	  </div>
	);
}

export default CurrentWeatherCard;
