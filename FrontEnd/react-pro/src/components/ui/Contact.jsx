import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/simple-icons/Github";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { PhoneCall } from "@styled-icons/evaicons-solid/PhoneCall";
import "./ui.css";

const Contact = () => {
	return (
		<section id="contact" className="contact-section">
			<div className="contact-section-header">
				<h2>Let's work together...</h2>
			</div>
			<div className="contact-links">
				<a
					id="profile-link"
					href="https://github.com/TorresjDev"
					target="_blank"
					className="contact-icons"
					rel="noreferrer"
				>
					<Github className="logo-icon"></Github>
					TorresjDev
				</a>
				<a
					href="https://www.linkedin.com/in/torresdev/"
					target="_blank"
					className="contact-icons"
					rel="noreferrer"
				>
					<LinkedinSquare className="logo-icon" /> torresde
				</a>

				<a href="mailto:j.torres3.dev@gmail.com" className="contact-icons">
					<EmailOutline className="logo-icon" /> Send emai
				</a>
				<a href="tel:760-515-9294" className="contact-icons">
					<PhoneCall className="logo-icon" /> Call m
				</a>
			</div>
		</section>
	);
};

export default Contact;
