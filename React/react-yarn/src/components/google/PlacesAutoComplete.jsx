import React, { useState } from 'react';
import { Autocomplete, LoadScript } from '@react-google-maps/api';
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function PlaceAutoComplete() {
	const [autocomplete, setAutoComplete] = useState(null);
	const [address, setAddress] = useState('');

	const handleOnLoad = (autoComplete) => {
		console.log('autoComplete=> ', autoComplete);
		setAutoComplete(autoComplete);
	};

	const handlePlaceChanged = () => {
		if (autocomplete !== null) {
			const place = autocomplete.getPlace();
			setAddress(place.formatted_address);
			console.log({ place });
		} else {
			console.log('Autocomplete is not loaded yet!');
		}
	};

	const handleAddressChange = (e) => {
		setAddress(e.target.value);
		console.log(e.target.value, address);
	};

	return (
		<div className='mb-3'>
			<label htmlFor='address'>Address</label>
			<LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
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
						{autocomplete?.getPlace()?.predictions?.map((prediction) => (
							<li key={prediction.place_id}>{prediction.description}</li>
						))}
					</ul>
				)}
			</LoadScript>
		</div>
	);
}

export default PlaceAutoComplete;
