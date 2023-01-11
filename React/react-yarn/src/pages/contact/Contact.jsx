import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactLinks from "./Contact-Links";
import ContactForm from "./Contact-Form";
import "./contact.css";
const Contact = () => {
	return (
		<React.Fragment>
			<Container className=" contact-container ">
				<Row className="p-3 ">
					<Col className="contact-heading ">
						<h1 className="display-3">Let's work together...</h1>
						<p className="lead">Let us connect</p>
					</Col>
				</Row>
				<Row md="auto" className="justify-content-around">
					<Col>
						<ContactLinks />
					</Col>
					<Col md={5} className="">
						<ContactForm />
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default Contact;
