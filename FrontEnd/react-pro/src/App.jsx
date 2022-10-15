import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./components/ui/Home";
// import Contact from "./components/ui/Contact";
import CardCreate from "./components/projects/cards/CardCreate";
import CardDisplay from "./pages/cards-pg/CardDisplay";
import CardDetails from "./components/projects/cards/CardDetails";
import NotFound from "./components/NotFound";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="app">
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						{/* <Route exact path="/contact">
							<Contact />
						</Route> */}
						<Route exact path="/cards">
							<CardDisplay />
						</Route>
						<Route path="/create/card">
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
	);
}

export default App;
