import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
	return (
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
	);
};

export default Contact;
