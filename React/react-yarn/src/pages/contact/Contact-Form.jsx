import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_47254dr', 'template_3adzo5r', form.current, 'D9773jLQenPeHc0S3').then(
			(result) => {
				console.log(result.text);
				console.log('message sent');
				Swal.fire({
					title: 'Message was sent successfully.',
					color: '#6d0000',
					backdrop: `
							rgba(29,0,57,0.6)
							url("https://sweetalert2.github.io/images/nyan-cat.gif")
							center top
							no-repeat
						`,
				});
				e.target.reset();
			},
			(error) => {
				console.log(error.text);
			},
		);
	};

	return (
		<React.Fragment>
			<div className='container-fluid fw-bold'>
				<Form className='bg-light p-3 shadow border-2 rounded' ref={form} onSubmit={sendEmail}>
					<h2>Send me a message 👇</h2>
					<Form.Group className='form-group m-2'>
						<Form.Label className='form-group m-2 ps-2' htmlFor='name'>
							Name
						</Form.Label>
						<Form.Control type='text' className='form-control' id='name' name='name' placeholder='Enter your name' />
					</Form.Group>
					<Form.Group className='form-group m-2'>
						<Form.Label className='form-group m-2 ps-2' htmlFor='email'>
							Email
						</Form.Label>
						<Form.Control type='text' className='form-control' id='email' name='email' placeholder='Enter your email' />
					</Form.Group>
					<Form.Group className='form-group m-2'>
						<Form.Label className='ps-3' htmlFor='message'>
							Message
						</Form.Label>
						<Form.Control as='textarea' name='message' className='form-control ' id='message' rows='3'></Form.Control>
					</Form.Group>
					<Button variant='outline-primary' className='contact-submit my-3' value='Send' type='submit'>
						Send
					</Button>
				</Form>
			</div>
		</React.Fragment>
	);
};

export default ContactForm;
