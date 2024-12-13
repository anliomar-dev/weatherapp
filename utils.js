export async function getCityCordinates(city){
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=56039a482b3949ba0b41d9e2a4d1405e&units=imperial`;
	try{
		const response = await fetch(url);
		const data = await response.json();
		if(data.length !== 0){
			return { lat: data[0].lat, lon: data[0].lon };
		}else{
			console.log("City could not be found");
		}
	}catch(error){
		console.log(error);
	}
}