import React from "react";
// import { Container } from "react-bootstrap";

import LandingVideo from "../landing/LandingVideo";
import LandingPage from "../landing/LandingPage";

function Home(props) {
	return (
		<React.Fragment>
			<LandingVideo />
			<LandingPage />
		</React.Fragment>
	);
}

export default Home;
