import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
	return (
		<React.Fragment>
			{/* <div className=" mb-3 pb-3 bg-light position-static"> */}
			{/* <div className="col-md-6 p-5 bg-primary text-white">
						<h1>Hi There</h1>
						<h4>Hello this is h</h4>
					</div> */}

			<Form className=" bg-light">
				<h1>Contact Form</h1>
				<Form.Group className="form-group m-2">
					<Form.Label htmlFor="name">Name</Form.Label>
					<Form.Control
						type="text"
						className="form-control"
						id="name"
						placeholder="Enter your name"
					/>
				</Form.Group>
				<Form.Group className="form-group m-2">
					<Form.Label htmlFor="email">Email</Form.Label>
					<Form.Control
						type="text"
						className="form-control"
						id="email"
						placeholder="Enter your email"
					/>
				</Form.Group>
				<Form.Group className="form-group m-2">
					<Form.Label htmlFor="message">Message</Form.Label>
					<Form.Control
						as="textarea"
						className="form-control "
						id="message"
						rows="3"
					></Form.Control>
				</Form.Group>
				<Button
					className="contact-submit"
					// className="btn btn-outline-primary"
					// onClick={sendMail}
				>
					Submit
				</Button>
			</Form>
			{/* </div> */}
		</React.Fragment>
	);
};

export default ContactForm;
