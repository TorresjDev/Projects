import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github, Mailbox, Telephone } from "@styled-icons/bootstrap";
import "./contact.css";

const Contact = () => {
	const iconStyle = { color: "maroon", width: "3rem" };
	// styled(Linkedin)`
	// width: 2rem;

	// `;

	return (
		<React.Fragment>
			<Container className="py-5">
				<Row className="pt-4">
					<Col>
						<h1 className="display-3">Let's work together...</h1>
						<p className="lead">Let us connect</p>
					</Col>
				</Row>
				<Row>
					<Link
						href="https://www.linkedin.com/in/torresdev/"
						target="_blank"
						class="btn contact-details"
					>
						<Linkedin style={iconStyle} /> torresdev
					</Link>
					<Link
						id="profile-link"
						href="https://github.com/TorresjDev"
						target="_blank"
						class="btn contact-details"
					>
						<Github style={iconStyle} /> TorresjDev
					</Link>
					<Link
						href="mailto:j.torres3.dev@gmail.com"
						class="btn contact-details"
					>
						<Mailbox style={iconStyle} /> Send email
					</Link>
					<Link href="tel:760-515-9294" class="btn contact-details">
						<Telephone style={iconStyle} /> Call me
					</Link>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default Contact;

/*
		<React.Fragment>
			<section id="contact" class="contact-section">
				<div class="contact-section-header">
					<h2>Let's work together...</h2>
					<p>Let us connect</p>
				</div>

				<div class="contact-links">
					<Link
						href="https://www.linkedin.com/in/torresdev/"
						target="_blank"
						class="btn contact-details"
					>
						<i class="fab fa-linkedin"></i> torresdev
					</Link>
					<Link
						id="profile-link"
						href="https://github.com/TorresjDev"
						target="_blank"
						class="btn contact-details"
					>
						<i class="fab fa-github"></i> TorresjDev
					</Link>
					<Link
						href="mailto:j.torres3.dev@gmail.com"
						class="btn contact-details"
					>
						<i class="fas fa-at"></i> Send email
					</Link>
					<Link href="tel:760-515-9294" class="btn contact-details">
						<i class="fas fa-mobile-alt"></i> Call me
					</Link>
				</div>
			</section>
		</React.Fragment>
*/
