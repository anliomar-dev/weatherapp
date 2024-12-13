import {Wind, Droplets, Eye, WindArrowDown } from "lucide-react";

function WeatherDetails({city, wind = 0, windUnit = 'Km/h',
	                  humidity = 0, visibility = 0, pressure = 0 }) {

	if(city === undefined || city === null || city === "") {
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
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
			  </svg>
			  <span>Warning: Veuillez specifier une ville!</span>
		  </div>
		)
	}
	return (
	  <div className="flex gap-12 my-4">
		  <div className="flex gap-2 items-center justify-center shadow-lg rounded-lg py-4 px-4">
			  <div>
				  <Wind size={40}/>
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg">Wind</span>
				  <div className="font-medium flex gap-1"><span>{wind} </span><span>{windUnit}</span></div>
			  </div>
		  </div>
		  <div className="flex gap-3 items-center justify-center shadow-lg rounded-lg py-2 px-4">
			  <div>
				  <Droplets size={40}/>
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg">Humidity</span>
				  <span className="font-medium">{humidity} %</span>
			  </div>
		  </div>
		  <div className="flex gap-3 items-center justify-center shadow-lg rounded-lg py-2 px-4">
			  <div>
				  <Eye size={40}/>
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg">Visibility</span>
				  <span className="font-medium">{visibility} Km</span>
			  </div>
		  </div>
		  <div className="flex gap-3 items-center justify-center shadow-lg rounded-lg py-2 px-4">
			  <div>
				  <WindArrowDown size={40} />
			  </div>
			  <div className="flex flex-col">
				  <span className="text-lg">Pressure</span>
				  <span className="font-medium">{pressure} mb</span>
			  </div>
		  </div>
	  </div>
	);
}

export default WeatherDetails;
