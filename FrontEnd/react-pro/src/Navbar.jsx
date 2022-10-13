import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>NavBar</h1>
			<div className="links">
				<Link to="/">Home</Link>
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
			</div>
		</nav>
	);
};

export default Navbar;
