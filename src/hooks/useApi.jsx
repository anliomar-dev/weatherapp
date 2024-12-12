import { useEffect, useState } from 'react';

function useApi(lat, lon, unit) {
	const appid = import.meta.env.VITE_API_KEY;
	const [cordinates, setcordinates] = useState({
		lat: lat,
		lon: lon,
		unit: unit,
	});

	const [weatherData, setWeatherData] = useState([]);


	useEffect(() => {
		if (cordinates.lat !== null && cordinates.lon !== null) {
			const url =
			  `https://api.openweathermap.org/data/2.5/weather?lat=${cordinates.lat}&lon=${cordinates.lon}&appid=${appid}&units=${unit}`;

			fetch(url)
			  .then(response => response.json())
			  .then(data => {
				  if (data) {
					  setWeatherData(prevState => ({
						  ...prevState,
						  data: data
					  }));
				  }
			  })
			  .catch(error => {
				  console.error("Erreur lors de la récupération des données météo :", error);
			  });
		}
	}, [cordinates.lat, cordinates.lon, unit, appid]);

	return { weatherData, setWeatherData, cordinates, setcordinates };
}

export default useApi;
