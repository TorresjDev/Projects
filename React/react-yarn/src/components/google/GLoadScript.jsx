import React from 'react';
import { useLoadScript } from '@react-google-maps/api';
import GMap from './GMap';

function GLoadScript() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	});

	if (!isLoaded) {
		return <div>...loading</div>;
	}
	return <GMap />;
}

export default GLoadScript;
