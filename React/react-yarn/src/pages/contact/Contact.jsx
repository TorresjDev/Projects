import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github, Mailbox, Telephone } from "@styled-icons/bootstrap";
import "./contact.css";

const Contact = () => {
	return (
		<React.Fragment>
			<Container className="pt-5">
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
						<Linkedin /> torresdev
					</Link>
					<Link
						id="profile-link"
						href="https://github.com/TorresjDev"
						target="_blank"
						class="btn contact-details"
					>
						<Github /> TorresjDev
					</Link>
					<Link
						href="mailto:j.torres3.dev@gmail.com"
						class="btn contact-details"
					>
						<Mailbox /> Send email
					</Link>
					<Link href="tel:760-515-9294" class="btn contact-details">
						<Telephone /> Call me
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
