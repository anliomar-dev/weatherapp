import {getCityTime} from "../../utils.js";
import {MapPinCheck} from "lucide-react";

/**
 * `WeatherCardHeader` is a component that displays the header for a weather card, which includes
 * the current weather's timestamp and the city's name with a location icon.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.timezone - The timezone for the city, used to display the current time.
 * @param {string} props.city - The name of the city.
 * @returns {JSX.Element} A header section displaying the city name and current time.
 */

function WeatherCardHeader({ timezone, city }) {
	return (
	  <div className="flex flex-col gap-y-6 650:flex-row  justify-between items-start w-full px-6 py-2">
		  <div className="flex flex-col">
			  <p className="text-2xl dark:text-neutral-200">Current weather</p>
			  <p className="text-lg font-medium text-amber-200 ">
				  {getCityTime(timezone)}
			  </p>
		  </div>
		  <div className="self-start flex items-center gap-2">
			  <MapPinCheck className="dark:text-white"/>
			  <p className="text-2xl text-secondary-foreground dark:text-white">{city}</p>
		  </div>
	  </div>
	)
}

export default WeatherCardHeader;