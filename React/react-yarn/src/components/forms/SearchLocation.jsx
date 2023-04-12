import { useState } from 'react';
import { GoogleMap, Autocomplete, Marker, GoogleMapsApiContext } from '@react-google-maps/api';

function Map() {
	const [selectedPlace, setSelectedPlace] = useState(null);
	const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 }); // Default center of San Francisco

	const onLoad = (autocomplete) => {
		console.log('autocomplete:', autocomplete);
	};

	const onPlaceChanged = async () => {
		const place = autocomplete.getPlace();
		if (place.geometry) {
			const { lat, lng } = place.geometry.location;
			setCenter({ lat, lng });
			setSelectedPlace(place);
		}
	};

	const onMarkerDragEnd = async (event) => {
		const { latLng } = event;
		const lat = latLng.lat();
		const lng = latLng.lng();

		const geocoder = new google.maps.Geocoder();
		const { results } = await geocode({ location: { lat, lng } }, geocoder);
		const place = results[0];
		setSelectedPlace(place);
	};

	return (
		<GoogleMapsApiContext apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
			<GoogleMap mapContainerStyle={{ height: '100vh', width: '100%' }} zoom={13} center={center}>
				{selectedPlace && (
					<Marker
						position={{ lat: selectedPlace.geometry.location.lat(), lng: selectedPlace.geometry.location.lng() }}
						draggable={true}
						onDragEnd={onMarkerDragEnd}
					/>
				)}
				<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
					<input
						type='text'
						placeholder='Enter an address'
						style={{
							boxSizing: `border-box`,
							border: `1px solid transparent`,
							width: `240px`,
							height: `32px`,
							padding: `0 12px`,
							borderRadius: `3px`,
							boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
							fontSize: `14px`,
							outline: `none`,
							textOverflow: `ellipses`,
							position: 'absolute',
							left: '50%',
							marginLeft: '-120px',
						}}
					/>
				</Autocomplete>
			</GoogleMap>
		</GoogleMapsApiContext>
	);
}

export default Map;
