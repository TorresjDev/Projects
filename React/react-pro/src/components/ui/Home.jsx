import LandingPage from "../../pages/ui-pg/LandingPage";
import Contact from "./Contact";
import Footer from "./Footer";
import React from "react";

const Home = () => {
	return (
		<React.Fragment>
			<LandingPage></LandingPage>
			<Contact id="contact" />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
