import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_47254dr",
				"template_3adzo5r",
				form.current,
				"D9773jLQenPeHc0S3",
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("message sent");
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	return (
		<React.Fragment>
			{/* <div className=" mb-3 pb-3 bg-light position-static"> */}
			{/* <div className="col-md-6 p-5 bg-primary text-white">
						<h1>Hi There</h1>
						<h4>Hello this is h</h4>
					</div> */}

			<Form className=" bg-light" ref={form} onSubmit={sendEmail}>
				<h1>Leave me a message 👇</h1>
				<Form.Group className="form-group m-2">
					<Form.Label htmlFor="name">Name</Form.Label>
					<Form.Control
						type="text"
						className="form-control"
						id="name"
						name="name"
						placeholder="Enter your name"
					/>
				</Form.Group>
				<Form.Group className="form-group m-2">
					<Form.Label htmlFor="email">Email</Form.Label>
					<Form.Control
						type="text"
						className="form-control"
						id="email"
						name="email"
						placeholder="Enter your email"
					/>
				</Form.Group>
				<Form.Group className="form-group m-2">
					<Form.Label htmlFor="message">Message</Form.Label>
					<Form.Control
						as="textarea"
						name="message"
						className="form-control "
						id="message"
						rows="3"
					></Form.Control>
				</Form.Group>
				<Button
					className="contact-submit"
					value="Send"
					type="submit"
					// className="btn btn-outline-primary"
					// onClick={sendMail}
				>
					Send
				</Button>
			</Form>
			{/* </div> */}
		</React.Fragment>
	);
};

export default ContactForm;
