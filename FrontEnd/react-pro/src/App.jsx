import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./pages/ui-pg/Navbar";
import Home from "./pages/ui-pg/Home";
import CardCreate from "./components/cards/CardCreate";
import CardDisplay from "./pages/cards-pg/CardDisplay";
import CardDetails from "./components/cards/CardDetails";
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
						<Route exact path="/cards">
							<CardDisplay />
						</Route>
						<Route path="/create-card">
							<CardCreate />
						</Route>
						<Route path="/cards/:id">
							<CardDetails />
						</Route>
						<Route path="/contact">Contact</Route>
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
