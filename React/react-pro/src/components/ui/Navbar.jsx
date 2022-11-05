// import { Nav } from "rsuite";
// import HomeIcon from "@rsuite/icons/legacy/Home";
import "./ui.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav id="navbar" className="nav">
			<ul className="nav-list">
				<li>
					<Link icon="" to="/">
						Home
					</Link>
				</li>
				<li>
					<Link to="/cards">Cards</Link>
				</li>
				<li>
					<Link to="/create-card">New Card</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
