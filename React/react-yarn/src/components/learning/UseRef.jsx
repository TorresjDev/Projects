import React, { useState, useEffect, useRef } from 'react';

export default function UseRef() {
	const [name, setName] = useState('');
	const prevName = useRef('');

	useEffect(() => {
		prevName.current = name;

		// return () => {
		//   second
		// }
	}, [name]);

	return (
		<>
			<div className='col-md-12 border rounded m-2 p-3 bg-light'>
				<input value={name} onChange={(e) => setName(e.target.value)} placeholder='enter your name' />
				<div>
					My name is now {name} used to call me {prevName.current}
				</div>
			</div>
		</>
	);
}
