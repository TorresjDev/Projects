import React from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
import ContactLinks from "./Contact-Links";
import ContactForm from "./Contact-Form";
// import { Linkedin, Github, Telephone, Mailbox } from "@styled-icons/bootstrap";
import "./contact.css";

const Contact = () => {
	// const renderTooltip = (props) => (
	// 	<Tooltip {...props}>j.torres3.dev@gmail.com</Tooltip>
	// );

	// const iconStyle = { color: "maroon", width: "3rem" };
	// styled(Linkedin)`
	// width: 2rem;

	// `;

	return (
		<React.Fragment>
			<Container fluid className="p-3 contact-container ">
				<Row className="p-3 ">
					<Col className="contact-heading ">
						<h1 className="display-3">Let's work together...</h1>
						<p className="lead">Let us connect</p>
					</Col>
					<Col>
						<ContactLinks />
					</Col>
				</Row>
				<Row md="auto" className="justify-content-around"></Row>
				<Col className="m-3">
					<ContactForm />
				</Col>
				{/* <Row className="contact-links py-3">
					<a
						href="https://www.linkedin.com/in/torresdev/"
						target="_blank"
						rel="noreferrer"
						className="btn contact-details"
					>
						<Linkedin style={iconStyle} /> torresdev
					</a>
					<a
						id="profile-link"
						href="https://github.com/TorresjDev"
						target="_blank"
						rel="noreferrer"
						className="btn contact-details"
					>
						<Github style={iconStyle} /> TorresjDev
					</a>
					<OverlayTrigger
						placement="bottom"
						delay={{ show: 250, hide: 600 }}
						overlay={renderTooltip}
					>
						<a
							href="mailto:j.torres3.dev@gmail.com"
							className="btn contact-details"
						>
							<Mailbox style={iconStyle} /> email
						</a>
					</OverlayTrigger>

					<a href="tel:760-515-9294" className="btn contact-details">
						<Telephone style={iconStyle} /> Call me
					</a>
				</Row> */}
			</Container>
		</React.Fragment>
	);
};

export default Contact;

/*
		<React.Fragment>
			<section id="contact" className="contact-section">
				<div className="contact-section-header">
					<h2>Let's work together...</h2>
					<p>Let us connect</p>
				</div>

				<div className="contact-links">
					<Link
						href="https://www.linkedin.com/in/torresdev/"
						target="_blank"
						className="btn contact-details"
					>
						<i className="fab fa-linkedin"></i> torresdev
					</Link>
					<Link
						id="profile-link"
						href="https://github.com/TorresjDev"
						target="_blank"
						className="btn contact-details"
					>
						<i className="fab fa-github"></i> TorresjDev
					</Link>
					<Link
						href="mailto:j.torres3.dev@gmail.com"
						className="btn contact-details"
					>
						<i className="fas fa-at"></i> Send email
					</Link>
					<Link href="tel:760-515-9294" className="btn contact-details">
						<i className="fas fa-mobile-alt"></i> Call me
					</Link>
				</div>
			</section>
		</React.Fragment>
*/
