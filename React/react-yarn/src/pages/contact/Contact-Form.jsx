import React from "react";
// import { Form } from "react-bootstrap";

const ContactForm = () => {
	return (
		<React.Fragment>
			<div className="container mb-3 pb-3 bg-light position-static">
				<div className="row">
					{/* <div className="col-md-6 p-5 bg-primary text-white">
						<h1>Hi There</h1>
						<h4>Helllo this is h</h4>
					</div> */}

					<div className="col py-3">
						<h2>Contact Form</h2>
						<div className="form-group my-2">
							<h5 htmlFor="name">Name</h5>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="Enter your name"
							/>
						</div>
						<div className="form-group my-2">
							<h5 htmlFor="email">Email</h5>
							<input
								type="text"
								className="form-control"
								id="email"
								placeholder="Enter your email"
							/>
						</div>
						<div className="form-group my-2">
							<h5 htmlFor="message">Message</h5>
							<textarea
								className="form-control "
								id="message"
								rows="3"
							></textarea>
						</div>
						<button
							className="btn btn-outline-primary"
							// onClick={sendMail}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ContactForm;
