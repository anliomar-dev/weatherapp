import { useContext, useEffect } from "react";
import { UnitContext } from "../hooks/unitProvider.jsx";
import useApi from "../hooks/useApi.jsx";
import { LocationContext } from "../hooks/locationProvider.jsx";
import { getCityCordinates } from "../../utils.js";
import blob from "../assets/images/blob.jpeg"
import Forecasts from "./forecasts.jsx";

function CurrentWeatherCard() {
	const currentDate = new Date();
	let hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12 || 12;

	// Get context values
	const { unit } = useContext(UnitContext);
	const { city } = useContext(LocationContext);

	// Initialize the hook with null (initial coordinates will be set later)
	const { weatherData, coordinates, setCoordinates } = useApi(null, null, unit);

	// Fetch the coordinates when the city changes
	useEffect(() => {
		if (city) {
			const fetchCoordinates = async () => {
				try {
					const data = await getCityCordinates(city);
					setCoordinates({ lat: data.lat, lon: data.lon, unit });
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
		  <div role="alert" className="alert alert-warning">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 shrink-0 stroke-current"
				fill="none"
				viewBox="0 0 24 24">
				  <path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
			  </svg>
			  <span>Warning: Veuillez specifier une ville!</span>
		  </div>
		);
	}

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
					  <span className="text-5xl">{weatherData?.main?.temp ?? "N/A"}</span>
					  <span>{unit === "metric" ? "°C" : "°F"}</span>
				  </div>
				  <div className="flex flex-col">
						<span>
							<strong>{weatherData?.weather[0]?.description}</strong>
						</span>
					  <span>feels like {weatherData?.main?.feels_like ?? "N/A"} {unit === "metric" ? "°C" : "°F"}</span>
				  </div>
			  </div>
			  {weatherData && weatherData.wind && (
				<Forecasts
				  city={city}
				  wind={unit === "metric" ? `${(weatherData.wind.speed * 3.6).toFixed(2)}` : `${weatherData.wind.speed}`}
				  windUnit={unit === "metric" ? "Km/h" : "mph"}
				  humidity={weatherData.main.humidity}
				  visibility={(weatherData.visibility / 1000).toFixed(1)}
				  pressure={weatherData.main.pressure}
				/>
			  )}
		  </div>
	  </div>
	);
}

export default CurrentWeatherCard;
