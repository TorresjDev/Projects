import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./components/ui/ui.css";
import "./custom.scss";

import React from "react";
import Home from "./components/ui/Home";
import Contact from "./pages/contact/Contact";
import NotFound from "./components/NotFound";
import SiteNav from "./components/ui/SiteNav";
import Footer from "./components/ui/Footer";
import Container from "react-bootstrap/Container";

function App() {
	return (
		<React.Fragment>
			<Router>
				<SiteNav></SiteNav>
				<Container className="app">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/contact" element={<Contact />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					{/* <Home /> */}
					<Footer />
				</Container>
			</Router>
		</React.Fragment>
	);
}

export default App;
