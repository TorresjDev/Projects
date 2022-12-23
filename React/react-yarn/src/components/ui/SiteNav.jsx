import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

const SiteNav = () => {
	// const goToPage = (e) => {
	// 	console.log(e.currentTarget.dataset.page);
	// };

	return (
		<Navbar
			className="navbar"
			fixed="top"
			SiteNav
			expand="lg"
			bg="info"
			variant="light"
		>
			<Container className="nav-list">
				<Navbar.Brand href="/" icon="">
					React-Bootstrap
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav variant="pills" bg="success" className="me-auto">
						{/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
						<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="/cards">Cards</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/create-card">
								New Card
							</NavDropdown.Item>
							{/* <NavDropdown.Item href="/contact">
								Contact
							</NavDropdown.Item> */}
						</NavDropdown>
					</Nav>
					<Nav variant="tabs" bg="success">
						<Nav.Link href="/contact">Contact</Nav.Link>
						{/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default SiteNav;
