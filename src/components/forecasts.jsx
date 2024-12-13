function Forecast({city, wind = 0, windUnit = 'Km/h',
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
		  <div className="flex flex-col">
			  <span>Wind</span>
			  <span className="font-bold">{wind} {windUnit}</span>
		  </div>
		  <div className="flex flex-col">
			  <span>Humidity</span>
			  <span className="font-bold">{humidity} %</span>
		  </div>
		  <div className="flex flex-col">
			  <span>Visibility</span>
			  <span className="font-bold">{visibility} Km</span>
		  </div>
		  <div className="flex flex-col">
			  <span>Pressure</span>
			  <span className="font-bold">{pressure} mb</span>
		  </div>
	  </div>
	);
}

export default Forecast;
