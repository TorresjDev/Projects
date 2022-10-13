import LandingPage from "../components/ui/LandingPage";
import Contact from "../components/ui/Contact";
import Footer from "../components/ui/Footer";
import React from "react";

const Home = () => {
	return (
		<React.Fragment>
			<LandingPage />
			<Contact />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
