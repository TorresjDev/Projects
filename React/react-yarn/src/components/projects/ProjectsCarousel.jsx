import React from "react";
import { Carousel, Container, Image, Col, Row } from "react-bootstrap";

const ProjectsCarousel = () => {
	return (
		<Container className="m-3" fluid="md">
			<Row md={4}>
				<Col lg={6} className="mx-auto m-3">
					{" "}
					<Carousel>
						<Carousel.Item
							href="https://codepen.io/TorresjDev/pen/yLjWZWP"
							className="project project-tile bg-secondary"
							target="_blank"
						>
							<Image
								style={{
									height: "300px",
									objectFit: "contain",
								}}
								className="project-image my-3"
								alt="project"
								src="https://i.ibb.co/GP3dq4c/random-quote.jpg"
							/>
							<Carousel.Caption className="pt-5">
								<h3 className="project-title">
									<span className="code">&lt;</span> Random Quote
									Machine
									<span className="code">/&gt;</span>
								</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item
							href="https://codepen.io/TorresjDev/pen/abKwMJO"
							className="project project-tile bg-secondary"
							target="_blank"
						>
							<Image
								style={{
									height: "300px",
									objectFit: "contain",
								}}
								className="project-image my-3"
								alt="project"
								src="https://i.ibb.co/wJw2KcP/picture-page.jpg"
							/>
							<Carousel.Caption className="pt-5">
								{" "}
								<h3 className="project-title">
									<span className="code">&lt;</span> Photo Gallery
									<span className="code">/&gt;</span>
								</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item
							href="https://codepen.io/TorresjDev/pen/MWXoRWa"
							className="project project-tile bg-secondary"
							target="_blank"
						>
							<Image
								style={{
									height: "300px",
									objectFit: "contain",
								}}
								className="project-image my-3"
								alt="project"
								src="https://i.ibb.co/jw55Bp8/magazine.jpg"
							/>

							<Carousel.Caption className="pt-5">
								{" "}
								<h3 className="project-title">
									<span class="code">&lt;</span> Magazine-Page
									<span class="code">/&gt;</span>
								</h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
};

export default ProjectsCarousel;
