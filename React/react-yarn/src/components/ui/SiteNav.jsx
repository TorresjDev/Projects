import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Home } from '@styled-icons/boxicons-regular/Home';
const SiteNav = () => {
	// const goToPage = (e) => {
	// 	console.log(e.currentTarget.dataset.page);
	// };
	const HomeStyled = styled(Home)`
		color: black;
		width: 2rem;
		padding-bottom: 0.5rem;
		padding-left: 0.5rem;
		&:hover {
			color: maroon;
			width: 2.1rem;
		}
	`;

	return (
		<Navbar className='nav' fixed='top' expand='lg' bg='info' variant='light'>
			<Container className='nav-list'>
				<Navbar.Brand href='/' className='nav-icon'>
					<HomeStyled />
				</Navbar.Brand>
				<strong>&nbsp; Welcome</strong>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav variant='pills' bg='success' className='me-auto'>
						{/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
						<NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='/artwork'>Artwork</NavDropdown.Item>
							<NavDropdown.Item href='/quotes'>Quote Generator</NavDropdown.Item>
							<NavDropdown.Item href='/history'>Historic Events</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='/form'>Form</NavDropdown.Item>
							<NavDropdown.Item href='/form/maps'>Map</NavDropdown.Item>

							<NavDropdown.Divider />
							<NavDropdown.Item href='/create-card'>New Card</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav variant='tabs' bg='success'>
						<Nav.Link href='/contact' className='nav-link'>
							Contact
						</Nav.Link>
						<NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='/login'>Login</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='/register'>Register</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Logout</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default SiteNav;
