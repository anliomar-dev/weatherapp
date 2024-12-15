/**
 * `WeatherMainInfos` component displays the main weather information, including temperature,
 * weather description, and an icon representing the weather conditions.
 *
 * @param {string} unit - The unit of measurement for temperature, either 'metric' (Celsius) or 'imperial' (Fahrenheit).
 * @param {number} feels_like - The temperature that the weather feels like, taking into account factors like humidity and wind.
 * @param {string} description - A brief description of the weather conditions (e.g., "clear sky", "rainy").
 * @param {number} tempeture - The current temperature.
 * @param {string} weatherIcon - The icon code representing the current weather, fetched from OpenWeatherMap.
 * @returns {JSX.Element} A section displaying the main weather information, including the icon, temperature, and description.
 */
function WeatherMainInfos({unit, feels_like, description, tempeture, weatherIcon}) {
	return (
	  <div className="flex gap-6 items-center py-5">
		  <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
		       alt="weather"/>
		  <div className="flex align-top text-white">
			  <span className="text-5xl">{tempeture ?? "N/A"}</span>
			  <span className="text-2xl">{unit === "metric" ? "°C" : "°F"}</span>
		  </div>
		  <div className="flex flex-col">
						<span>
							<p className="text-xl font-medium text-amber-300">{description}</p>
						</span>
			  <span
				className="text-lg text-neutral-200">feels like {feels_like ?? "N/A"} {unit === "metric" ? "°C" : "°F"}</span>
		  </div>
	  </div>
	);
}

export default WeatherMainInfos;