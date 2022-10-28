// import { Nav } from "rsuite";
// import HomeIcon from "@rsuite/icons/legacy/Home";
import "./ui.css";
import React from "react";

const Navbar = () => {
	return (
		<nav id="navbar" className="nav">
			<ul className="nav-list">
				<li>
					<span icon="">Home</span>
				</li>
				<li>
					<span to="/cards">Cards</span>
				</li>
				<li>
					<span to="/create-card">New Card</span>
				</li>
				<li>
					<span to="id:contact">Contact</span>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
