import React, { useState, useRef, useMemo } from 'react';

function SkillsInput() {
	const [skills, setSkills] = useState([]);
	const [query, setQuery] = useState('');

	const inputRef = useRef();

	const filteredSkills = useMemo(() => {
		return skills.filter((item) => {
			return item.toLowerCase().includes(query.toLowerCase());
		});
	}, [skills, query]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = inputRef.current.value;

		if (value === '') return;
		setSkills((prev) => {
			return [...prev, value];
		});
		inputRef.current.value = '';
	};

	return (
		<>
			{' '}
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='card'>
							<div className='card-header'>Skills</div>
							<div className='card-body'>
								<div className='row'>
									Search:
									<input value={query} onChange={(e) => setQuery(e.target.value)} type='search' />
								</div>
								<form onSubmit={handleSubmit}>
									<div className='mb-3 col-md-6 mx-auto'>
										<label htmlFor='skills' className='form-label'>
											Skills (use commas to separate skills)
											<input
												type='text'
												ref={inputRef}
												className='form-control'
												placeholder='Enter skills required for job'
												id='skills'
												name='skills'
												required
											></input>
										</label>
										<button type='submit' className='btn btn-success'>
											+ skill
										</button>
										<div className='row'>
											{filteredSkills.map((skill, index) => (
												<div className='col-md-2' key={index}>
													{skill}
												</div>
											))}
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SkillsInput;
