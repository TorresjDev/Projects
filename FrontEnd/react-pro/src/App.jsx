import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import CardCreate from "./components/cards/CardCreate";
import CardDisplay from "./pages/CardDisplay";
import CardDetails from "./components/cards/CardDetails";
import NotFound from "./components/NotFound";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
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
						</Route>{" "}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
