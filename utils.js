export function getCityCordinates(city){
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=56039a482b3949ba0b41d9e2a4d1405e&units=imperial`;

	fetch(url)
	  .then((response) => response.json())
	  .then((data) => {
		  return data;
	  })
	  .catch((error) => {
		  console.error('Erreur lors de la récupération des données météo:', error);
	  });
}