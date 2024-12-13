export async function getCityCordinates(city) {
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=56039a482b3949ba0b41d9e2a4d1405e&units=imperial`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		if (data.length !== 0) {
			return {lat: data[0].lat, lon: data[0].lon};
		} else {
			console.log("City could not be found");
			return {lat: null, lon: null};
		}
	} catch (error) {
		console.log(error);
	}
}

export function getCityTime(offsetInSeconds) {
	const currentUtcDate = new Date();

	const offsetInMilliseconds = offsetInSeconds * 1000;

	const cityDate = new Date(currentUtcDate.getTime() + offsetInMilliseconds);

	let hours = cityDate.getUTCHours();
	let minutes = cityDate.getUTCMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12 || 12;

	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;

	return `${hours}:${minutes} ${ampm}`;
}

