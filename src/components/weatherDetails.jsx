import {Wind, Droplets, Eye, WindArrowDown } from "lucide-react";

function WeatherDetails({wind = 0, windUnit = 'Km/h',
	                  humidity = 0, visibility = 0, pressure = 0 }) {
	return (
	  <div className="flex gap-10 flex-wrap justify-center my-4">
		  <div className="flex gap-2 items-center justify-center shadow-lg rounded-lg py-4 px-4">
			  <div>
				  <Wind size={40} className="dark:text-violet-300" />
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg dark:text-dark-foreground">Wind</span>
				  <div className="font-medium flex gap-1 dark:text-dark-foreground"><span>{wind} </span><span>{windUnit}</span></div>
			  </div>
		  </div>
		  <div className="flex gap-3 items-center justify-center shadow-lg rounded-lg py-2 px-4">
			  <div>
				  <Droplets size={40} className="dark:text-violet-300" />
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg dark:text-dark-foreground">Humidity</span>
				  <span className="font-medium dark:text-dark-foreground">{humidity} %</span>
			  </div>
		  </div>
		  <div className="flex gap-3 items-center justify-center shadow-lg rounded-lg py-2 px-4">
			  <div>
				  <Eye size={40} className="dark:text-violet-300" />
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg dark:text-dark-foreground">Visibility</span>
				  <span className="font-medium dark:text-dark-foreground">{visibility} Km</span>
			  </div>
		  </div>
		  <div className="flex gap-3 items-center justify-center shadow-lg rounded-lg py-2 px-4">
			  <div>
				  <WindArrowDown size={40} className="dark:text-violet-300" />
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg dark:text-dark-foreground">Pressure</span>
				  <span className="font-medium dark:text-dark-foreground">{pressure} mb</span>
			  </div>
		  </div>
	  </div>
	);
}

export default WeatherDetails;
