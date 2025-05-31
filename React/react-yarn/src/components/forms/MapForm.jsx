import React from 'react';
import GMap from '../google/GMap';

function MapForm() {
	return (
		<>
			<div className='container-fluid bg-dark'>
				<div className='row d-flex justify-content-center text-center'>
					<div className='col-md-10 mx-auto my-3'>
						<form action=''>
							<div className='form-group text-light my-2'>
								<label htmlFor=''>Search:&nbsp;</label>
							</div>
						</form>
						<div className='col-md-4 mx-auto my-3'>
							<GMap />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MapForm;
