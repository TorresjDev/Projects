import { Link } from "react-router-dom";
import "./ui-pg.css";

const Navbar = () => {
	return (
		<nav id="navbar" className="nav">
			<ul className="nav-list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/cards">Cards</Link>
				</li>
				<li>
					<Link to="/create-card">New Card</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
