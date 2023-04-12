import React, { useMemo } from 'react';
import './google.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function GMap() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	});

	if (!isLoaded) {
		return <div>...loading</div>;
	}
	return <Map />;
}

function Map() {
	const center = useMemo(() => ({ lat: 44, lng: -63 }), []);

	return (
		<GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
			<Marker position={center} />
		</GoogleMap>
	);
}
