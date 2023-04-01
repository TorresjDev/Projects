import React from 'react';
import SkillsInput from './SkillsInput';
import UseRef from '../learning/UseRef';

function Form() {
	return (
		<>
			<div className='container'>
				<h3>Form</h3>
				<div className='row'>
					<div className='col-md-6'>
						<SkillsInput />
					</div>
					<div className='col-md-6'>
						<UseRef />
					</div>
				</div>
			</div>
		</>
	);
}

export default Form;
