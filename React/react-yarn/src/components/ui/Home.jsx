import React from "react";
import LandingVideo from "../landing/LandingVideo";
import LandingPage from "../landing/LandingPage";
import ProjectsCarousel from "../landing/ProjectsCarousel";

function Home(props) {
	return (
		<React.Fragment>
			<LandingVideo />
			<LandingPage />
			<div>
				<ProjectsCarousel />
			</div>
		</React.Fragment>
	);
}

export default Home;
