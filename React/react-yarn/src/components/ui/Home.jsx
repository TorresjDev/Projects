import React from "react";
import videoBg from "../../vid/sunrise.mp4";
import moonImg from "../../img/home/moon-img-iii.png";
import styled from "styled-components";
import { ChevronDownCircle } from "@styled-icons/ionicons-outline/ChevronDownCircle";
import { Container } from "react-bootstrap";

function Home(props) {
	const ChevDownStyle = styled(ChevronDownCircle)`
		color: black;
		width: 5rem;
		opacity: 70%;
		&:hover {
			color: maroon;
			width: 6rem;
		}
	`;
	// console.log(props);
	// const user = props.user;
	return (
		<React.Fragment>
			<Container className="container home-main">
				<div class="home-overlay"></div>
				<video src={videoBg} autoPlay loop muted />
				<div class="home-content">
					<a href="/parallax-website/index.html">
						<img src={moonImg} alt="logo" />
					</a>
					<h2>Jesus Torres</h2>
					<p>Software Engineer</p>
					{/* <a href="#about">
						<ChevDownStyle /> 
					</a> */}
					<ChevDownStyle />
				</div>
			</Container>
		</React.Fragment>
	);
}

export default Home;
