import LandingPage from "../../pages/home-pg/LandingPage";
import Contact from "../../pages/home-pg/Contact";
import Footer from "../../pages/home-pg/Footer";
import React from "react";

const Home = () => {
	return (
		<React.Fragment>
			<LandingPage></LandingPage>
			{/* <Contact id="contact" /> */}
			<Footer />
		</React.Fragment>
	);
};

export default Home;
