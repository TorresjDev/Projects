import React from 'react';
// import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import videoBg from '../../vid/sunrise.mp4';
import moonImg from '../../img/home/moon-img.png';
import styled from 'styled-components';
import { ChevronDownCircle } from '@styled-icons/ionicons-outline/ChevronDownCircle';

function LandingVideo() {
	const ChevDownStyle = styled(ChevronDownCircle)`
		color: silver;
		width: 6rem;
		opacity: 70%;
		&:hover {
			color: maroon;
			width: 6rem;
		}
	`;

	return (
		<Container className='container home-main'>
			<div className='home-overlay'></div>
			<video src={videoBg} autoPlay loop muted />
			<div className='home-content'>
				<a href='/parallax-website/index.html'>
					<img src={moonImg} alt='logo' />
				</a>
				<h2>Jesus Torres</h2>
				<p>Software Engineer</p>
				<a href='#projects-carousel'>
					<ChevDownStyle />
				</a>
			</div>
		</Container>
	);
}

export default LandingVideo;
