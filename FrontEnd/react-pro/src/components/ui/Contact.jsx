import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/simple-icons/Github";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { PhoneCall } from "@styled-icons/evaicons-solid/PhoneCall";

const Contact = () => {
	return (
		<section id="contact" className="contact-section">
			<div className="contact-section-header">
				<h2>Let's work together...</h2>
				<p>Let us connect</p>
			</div>
			<div className="contact-links">
				<a
					id="profile-link"
					href="https://github.com/TorresjDev"
					target="_blank"
					className="btn-icon contact-details"
					rel="noreferrer"
				>
					<Github className="icon" /> TorresjDev
				</a>
				<a
					href="https://www.linkedin.com/in/torresdev/"
					target="_blank"
					className="btn-icon contact-details"
					rel="noreferrer"
				>
					<LinkedinSquare className="icon" /> torresdev
				</a>

				<a
					href="mailto:j.torres3.dev@gmail.com"
					className="btn-icon contact-details"
				>
					<EmailOutline className="icon" /> Send email
				</a>
				<a href="tel:760-515-9294" className="btn-icon contact-details">
					<PhoneCall className="icon" /> Call me
				</a>
			</div>
		</section>
	);
};

export default Contact;
