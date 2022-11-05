import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import NotFound from "./components/NotFound";
import Navbar from "./components/ui/Navbar";
import Home from "./components/ui/Home";
import Contact from "./components/ui/Contact";
// import Contact from "./components/ui/Contact";
import CardCreate from "./components/projects/cards/CardCreate";
import CardDetails from "./components/projects/cards/CardDetails";
import CardDisplay from "./pages/projects-pg/cards-pg/CardDisplay";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Navbar />
				<div className="app">
					<div className="content">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/contact">
								<Contact />
							</Route>
							{/* <Route exact path="/contact">
							<Contact />
						</Route> */}
							<Route exact path="/cards">
								<CardDisplay />
							</Route>
							<Route path="/create-card">
								<CardCreate />
							</Route>
							<Route path="/cards/:id">
								<CardDetails />
							</Route>
							<Route path="*">
								<NotFound></NotFound>
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</React.Fragment>
	);
}

export default App;
