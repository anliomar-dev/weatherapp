import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';

/**
 * `WeatherMap` component renders a marker on the map at the given latitude and longitude.
 * When the latitude or longitude changes, the map view is updated to center on the new position.
 *
 * @param {number} lat - The latitude of the location to be displayed on the map.
 * @param {number} lon - The longitude of the location to be displayed on the map.
 * @returns {JSX.Element} A marker component that represents the location on the map.
 */
function WeatherMap({ lat, lon }) {
	const map = useMap();

	useEffect(() => {
		if (map) {
			map.setView([lat, lon], map.getZoom());
		}
	}, [lat, lon, map]);

	return (
	  <Marker position={[lat, lon]}>
		  <Popup>
			  A pretty CSS3 popup. <br /> Easily customizable.
		  </Popup>
	  </Marker>
	);
}


/**
 * `WeatherMapContainer` component initializes the map with a given center (lat, lon)
 * and includes a tile layer from OpenStreetMap. It also renders the `WeatherMap` component to show a marker.
 *
 * @param {number} lat - The latitude of the center of the map.
 * @param {number} lon - The longitude of the center of the map.
 * @returns {JSX.Element} The map container with a marker and popup.
 */
function WeatherMapContainer({ lat, lon }) {
	return (
	  <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={true} className="w-full lg:w-[450px] h-[350px] map">
		  <TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		  />
		  <WeatherMap lat={lat} lon={lon} />
	  </MapContainer>
	);
}

export default WeatherMapContainer;
