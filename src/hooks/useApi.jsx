// useApi.js
import { useEffect, useState } from 'react';

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
