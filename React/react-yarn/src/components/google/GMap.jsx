import React, { useMemo, useState } from 'react';
import './google.css';
import { useLoadScript, Autocomplete, GoogleMap, Marker } from '@react-google-maps/api';
// import PlacesAutocomplete from './PlacesAutoComplete';

export default function GMap() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries: ['places'],
	});

	if (!isLoaded) {
		return <div>...loading</div>;
	}
	return <Map />;
}

function Map() {
	const center = useMemo(() => ({ lat: 44, lng: -63 }), []);
	const [selected, setSelected] = useState(null);

	const [address, setAddress] = useState('');

	const handleOnLoad = (selected) => {
		console.log('Autocomplete=> ', selected);
		setSelected(selected);
	};

	const handlePlaceChanged = () => {
		if (selected !== null) {
			const place = selected.getPlace();
			setAddress(place.formatted_address);
			console.log({ place });
		} else {
			console.log('Autocomplete is not loaded yet!');
		}
	};

	const handleAddressChange = (e) => {
		setAddress(e.target.value);
		console.log(e, address);
	};
	return (
		<>
			<div className='places-container'>
				<Autocomplete
					onLoad={handleOnLoad}
					onPlaceChanged={handlePlaceChanged}
					options={{
						fields: ['formatted_address', 'geometry'],
						types: ['geocode'],
						componentRestrictions: { country: 'us' },
					}}
					style={{ width: '100%' }}
				>
					<input
						type='text'
						name='address'
						autoComplete='address'
						value={address}
						placeholder='Enter Address'
						onChange={handleAddressChange}
						style={{ width: '100%', padding: '0.5rem' }}
					/>
				</Autocomplete>
				{address && (
					<ul>
						{selected?.getPlace()?.predictions?.map((prediction) => (
							<li key={prediction.place_id}>{prediction.description}</li>
						))}
					</ul>
				)}
			</div>

			<GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
				{selected && <Marker position={center} />}
			</GoogleMap>
		</>
	);
}
