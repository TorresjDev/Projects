// import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import SiteLogo from "../img/not-found/site-unavailable-xsm.jpg";
import React from "react";

const NotFound = () => {
	const imgStyle = {
		width: "33%",
		height: "30%",
		paddingTop: "25px",
		alignSelf: "center",
	};

	return (
		<Card className="text-center">
			<Card.Header>Site Un-Available</Card.Header>

			<Card.Img fluid variant="top" style={imgStyle} src={SiteLogo} />
			<Card.Body>
				<Card.Title>Sorry, Page not found</Card.Title>
				<Button href="/" variant="primary">
					Return Home
				</Button>
			</Card.Body>
			<Card.Footer className="text-muted">source not found</Card.Footer>
		</Card>
	);
};

export default NotFound;
