import styled from "styled-components";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/simple-icons/Github";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { PhoneCall } from "@styled-icons/evaicons-solid/PhoneCall";

const Contact = () => {
	const Linkedin = styled(LinkedinSquare)`
		color: red;
	`;

	const GitHub = styled(Github)`
		color: red;
	`;

	const EmailIcon = styled(EmailOutline)`
		color: red;
	`;

	const Phone = styled(PhoneCall)`
		color: red;
	`;

	return (
		<section id="contact" class="contact-section">
			<div className="contact-section-header">
				<h2>Let's work together...</h2>
				<p>Let us connect</p>
			</div>

			<div className="contact-links">
				<a
					href="https://www.linkedin.com/in/torresdev/"
					target="_blank"
					className="btn contact-details"
					rel="noreferrer"
				>
					<Linkedin></Linkedin> torresdev
				</a>
				<a
					id="profile-link"
					href="https://github.com/TorresjDev"
					target="_blank"
					className="btn contact-details"
					rel="noreferrer"
				>
					<GitHub className="fab fa-github"></GitHub> TorresjDev
				</a>
				<a
					href="mailto:j.torres3.dev@gmail.com"
					className="btn contact-details"
				>
					<EmailIcon className="fas fa-at"></EmailIcon> Send email
				</a>
				<a href="tel:760-515-9294" className="btn contact-details">
					<Phone className="fas fa-mobile-alt"></Phone> Call me
				</a>
			</div>
		</section>
	);
};

export default Contact;
