import {Wind, Droplets, Eye, WindArrowDown } from "lucide-react";

/**
 * `WeatherDetails` is a component that displays weather-related details such as wind speed, humidity,
 * visibility, and pressure. It uses various icons to represent each detail and provides their values in a readable format.
 *
 * @param {Object} props - The component's props.
 * @param {number} props.wind - The wind speed.
 * @param {string} props.windUnit - The unit for wind speed (default is 'Km/h').
 * @param {number} props.humidity - The humidity percentage.
 * @param {number} props.visibility - The visibility distance in kilometers.
 * @param {number} props.pressure - The atmospheric pressure in millibars.
 * @returns {JSX.Element} A set of weather details displayed in cards.
 */
function WeatherDetails({wind = 0, windUnit = 'Km/h',
	                  humidity = 0, visibility = 0, pressure = 0 }) {
	return (
	  <div className="grid grid-cols-1 md:grid-cols-2 1420:grid-cols-4 gap-6 flex-wrap justify-center my-4">
		  <div className="flex bg-white dark:bg-gradient-to-r dark:from-blue-950 dark:to-blue-800
               gap-2 items-center justify-center shadow-lg rounded-lg py-4 px-4">
			  <div>
				  <Wind size={40} className="dark:text-violet-300" />
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg dark:text-white">Wind</span>
				  <div className="font-medium flex gap-1 dark:text-white"><span>{wind} </span><span>{windUnit}</span></div>
			  </div>
		  </div>
		  <div className="flex gap-3 items-center justify-center bg-white dark:bg-gradient-to-r
		  dark:from-blue-950 dark:to-blue-800 shadow-lg rounded-lg py-2 px-4">
			  <div>
				  <Droplets size={40} className="dark:text-violet-300" />
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg dark:text-white">Humidity</span>
				  <span className="font-medium dark:text-white">{humidity} %</span>
			  </div>
		  </div>
		  <div className="flex gap-3 items-center justify-center bg-white dark:bg-gradient-to-r
		  dark:from-blue-950 dark:to-blue-800 dark:bg-blue-950 shadow-lg rounded-lg py-2 px-4">
			  <div>
				  <Eye size={40} className="dark:text-violet-300" />
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg dark:text-white">Visibility</span>
				  <span className="font-medium dark:text-white">{visibility} Km</span>
			  </div>
		  </div>
		  <div className="flex gap-3 items-center justify-center bg-white dark:bg-gradient-to-r
		  dark:from-blue-950 dark:to-blue-800 dark:bg-blue-950 shadow-lg rounded-lg py-2 px-4">
			  <div>
				  <WindArrowDown size={40} className="dark:text-violet-300" />
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg dark:text-white">Pressure</span>
				  <span className="font-medium dark:text-white">{pressure} mb</span>
			  </div>
		  </div>
	  </div>
	);
}

export default WeatherDetails;
