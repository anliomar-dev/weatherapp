import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';

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
