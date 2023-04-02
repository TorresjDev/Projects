import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '24em',
	borderStyle: 'groove',
	borderColor: 'maroon',
	borderWidth: '.3em',
	borderRadius: '9px',
};

const center = {
	lat: 19.6928,
	lng: -98.8431,
};

function MyComponent(props) {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: props.gMapKey,
	});

	const [map, setMap] = React.useState(null);

	false && console.log(map);

	const onLoad = React.useCallback(function callback(map) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12.99} onLoad={onLoad} onUnmount={onUnmount}>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<>
			<div className='col'>
				<p>Could not find the specified location</p>
			</div>
		</>
	);
}

export default React.memo(MyComponent);
