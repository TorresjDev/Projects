import { Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import "./ui.css";

const Navbar = () => {
	return (
		<nav id="navbar" className="nav">
			<ul className="nav-list">
				<li>
					<Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
				</li>
				<li>
					<Nav.Item to="/cards">Cards</Nav.Item>
				</li>
				<li>
					<Nav.Item to="/create-card">New Card</Nav.Item>
				</li>
				<li>
					<Nav.Item to="id:contact">Contact</Nav.Item>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
