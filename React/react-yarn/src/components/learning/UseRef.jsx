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
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<div>
				My name is now {name} used to call me {prevName.current}
			</div>
		</>
	);
}
