import React, { useState, useRef } from "react";
import { Stack, Button, Col, Row } from "react-bootstrap";
import { Linkedin, Mailbox, Github, Telephone } from "@styled-icons/bootstrap";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

const ContactLinks = () => {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};
	const iconStyle = { width: "6rem" };

	return (
		<React.Fragment>
			<Stack direction="vertical" gap={4} className="pt-4 ">
				<Row>
					<Col>
						<Button
							className="contact-links"
							variant="outline-primary"
							style={iconStyle}
							rel="noreferrer"
							target="_blank"
							href="https://www.linkedin.com/in/torresdev/"
						>
							<Linkedin /> TorresjDev
						</Button>
					</Col>
					<Col>
						<Button
							className="contact-links"
							variant="outline-dark"
							style={iconStyle}
							rel="noreferrer"
							target="_blank"
							href="https://github.com/TorresjDev"
						>
							<Github /> TorresjDev
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<div ref={ref}>
							<Button
								className="contact-links"
								variant="outline-success"
								style={iconStyle}
								onClick={handleClick}
								href="mailto:j.torres3.dev@gmail.com"
							>
								<Mailbox /> email
							</Button>

							<Overlay
								show={show}
								target={target}
								placement="bottom"
								container={ref}
								containerPadding={20}
							>
								<Popover id="popover-contained">
									<Popover.Header as="h3">
										j.torres3.dev@gmail.com
									</Popover.Header>
									{/* <Popover.Body>
								<strong>Holy guacamole!</strong> Check this info.
							</Popover.Body> */}
								</Popover>
							</Overlay>
						</div>
					</Col>
					<Col>
						<div>
							<Button
								className="contact-links"
								variant="outline-secondary"
								style={iconStyle}
								rel="noreferrer"
								href="tel:760-515-9294"
							>
								<Telephone /> Call me
							</Button>
						</div>
					</Col>
				</Row>
			</Stack>
		</React.Fragment>
	);
};

export default ContactLinks;
