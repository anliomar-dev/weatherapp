import { useEffect, useState } from 'react';

/**
 * Custom hook for fetching weather data based on coordinates and unit of measurement.
 *
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @param {string} unit - The unit of measurement for the temperature ("metric" or "imperial").
 *
 * @returns {Object} The weather data, loading state, and methods for updating coordinates.
 * @returns {Object|null} weatherData - The fetched weather data from the OpenWeather API (or null if not yet fetched).
 * @returns {boolean} loading - A boolean indicating whether the data is still being fetched.
 * @returns {Object} coordinates - The current coordinates used in the API request.
 * @returns {Function} setCoordinates - A function to update the coordinates.
 */

function useApi(lat, lon, unit) {
	const appid = import.meta.env.VITE_API_KEY;
	const [coordinates, setCoordinates] = useState({
		lat: lat, lon: lon, unit: unit
	});
	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (coordinates.lat && coordinates.lon) {
			setLoading(true);
			const url = `https://api.openweathermap.org/data/2.5/
			weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${appid}&units=${unit}`;

			fetch(url)
			  .then(response => response.json())
			  .then(data => {
				  setWeatherData(data);
				  setLoading(false);
			  })
			  .catch(error => {
				  console.error("Error fetching weather data:", error);
				  setLoading(false);
			  });
		}
	}, [coordinates, unit, appid]);

	return { weatherData, loading, coordinates, setCoordinates };
}

export default useApi;
