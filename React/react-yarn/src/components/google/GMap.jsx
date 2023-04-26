import React, { useMemo, useState } from 'react';
import './google.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import PlacesAutocomplete from './PlacesAutoComplete';

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
	const [selected, setSelected] = useState(null);

	return (
		<>
			<div className='places-container'>
				<PlacesAutocomplete setSelected={setSelected} />
			</div>

			<GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
				{selected && <Marker position={selected} />}
			</GoogleMap>
		</>
	);
}
