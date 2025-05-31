import React from 'react';
import SkillsInput from './SkillsInput';
import UseRef from '../learning/UseRef';

function Form() {
	return (
		<>
			<div className='container-fluid m-3 p-3 text-center'>
				<h3>Form</h3>
				<div className='row'>
					<div className='col-md-9'>
						<SkillsInput />
					</div>
					<div className='col-md-3'>
						<UseRef />
					</div>
				</div>
			</div>
		</>
	);
}

export default Form;
