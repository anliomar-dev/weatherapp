import {getCityTime} from "../../utils.js";
import {MapPinCheck} from "lucide-react";

function WeatherCardHeader({ timezone, city }) {
	return (
	  <div className="flex justify-between items-start w-full px-6 py-2">
		  <div className="flex flex-col">
			  <p className="text-2xl dark:text-neutral-200">Current weather</p>
			  <p className="text-lg font-medium text-amber-200 ">
				  {getCityTime(timezone)}
			  </p>
		  </div>
		  <div className="self-start flex items-center gap-2">
			  <MapPinCheck/>
			  <p className="text-2xl text-secondary-foreground dark:text-primary-foreground">{city}</p>
		  </div>
	  </div>
	)
}

export default WeatherCardHeader;