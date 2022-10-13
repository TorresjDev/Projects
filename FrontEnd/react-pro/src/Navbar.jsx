import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav id="navbar" className="nav">
			<ul className="nav-list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link
						to="/create-card"
						style={{
							color: "white",
							backgroundColor: "#8818ff",
							borderRadius: "8px",
						}}
					>
						New Card
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
