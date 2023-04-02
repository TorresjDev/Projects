import React from 'react';
import SearchLocation from './SearchLocation';

const gApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function MapForm() {
	return (
		<>
			<div className='container-fluid bg-dark'>
				<div className='row d-flex justify-content-center text-center'>
					<div className='col-md-10 mx-auto my-3'>
						<form action=''>
							<div className='form-group text-light my-2'>
								<label htmlFor=''>Search:&nbsp;</label>
								<input type='search' name='locationSearch' id='location-search' className='w-50' />
							</div>
						</form>
						{/* <div className='col-md-4 mx-auto my-3'> */}
						<SearchLocation gMapKey={gApiKey} />
						{/* </div> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default MapForm;
