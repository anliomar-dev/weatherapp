import blob from "/src/assets/images/blob.jpeg";

function Forecats(){
	return (
	  <div className="flex gap-12 my-4">
		  <div className="flex flex-col">
			  <span>Wind</span>
			  <span className="font-bold">11 km/h</span>
		  </div>
		  <div className="flex flex-col">
			  <span>Humidity</span>
			  <span className="font-bold">81%</span>
		  </div>
		  <div className="flex flex-col">
			  <span>Visibility</span>
			  <span className="font-bold">10km</span>
		  </div>
		  <div className="flex flex-col">
			  <span>Pressure</span>
			  <span className="font-bold">1030 hPa</span>
		  </div>
	  </div>
	)
}

function CurrentWeatherCard() {
	const currentDate = new Date();
	let hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';

	hours = hours % 12;
	hours = hours ? hours : 12; // l'heure '0' doit être affichée comme '12'

	return (
	  <div className="border border-red-500 w-[500px] mt-3 rounded-lg shadow-sm p-5">
		  <div className="currentWeatherCard">
			  <div className="flex flex-col">
				  <p>Current weather</p>
				  {/* Affiche l'heure avec minutes en format 12h */}
				  <p>{hours}:{minutes < 10 ? `0${minutes}` : minutes} {ampm}</p>
			  </div>
			  <div className="flex gap-6 items-center py-5 ">
				  <img src={blob} alt=""/>
				  <div className=" flex align-top">
					  <span className="text-5xl">22</span>
					  <span>°C</span>
				  </div>
				  <div className="flex flex-col">
					  <span><strong>Mostly clear</strong></span>
					  <span>feels like 22°C</span>
				  </div>
			  </div>
			  <div>
				  <p>The skies will be partly cloudy. The low will be 21°.</p>
			  </div>
			  <Forecats />
		  </div>
	  </div>
	);
}

export default CurrentWeatherCard;
