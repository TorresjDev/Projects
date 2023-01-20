import React from "react";
import { Carousel, Container, Image, Col, Row } from "react-bootstrap";

const ProjectsCarousel = () => {
	return (
		<Container className="m-3" fluid="md">
			<Row md={4}>
				<Col lg={6} className="mx-auto m-3 ">
					<Carousel className="project-carousel ">
						<Carousel.Item
							style={{
								textAlign: "center",
							}}
							href="https://codepen.io/TorresjDev/pen/yLjWZWP"
							className="project project-tile bg-secondary"
							target="_blank"
						>
							<Image
								style={{
									width: "300px",
									height: "300px",
									objectFit: "contain",
								}}
								className="img-thumbnail my-3 pb-3"
								alt="project"
								src="https://i.ibb.co/GP3dq4c/random-quote.jpg"
							/>
							<Carousel.Caption className="pt-8">
								<h3 className=" text-info font-weight-bolder bg-light p-1">
									<span className="code">&lt;</span> Random Quote
									Machine
									<span className="code">/&gt;</span>
								</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item
							style={{
								textAlign: "center",
							}}
							href="https://codepen.io/TorresjDev/pen/abKwMJO"
							className="project project-tile bg-secondary"
							target="_blank"
						>
							<Image
								style={{
									width: "300px",
									height: "300px",

									objectFit: "contain",
								}}
								className="img-thumbnail my-3 pb-3"
								alt="project"
								src="https://i.ibb.co/wJw2KcP/picture-page.jpg"
							/>
							<Carousel.Caption className="pt-8">
								{" "}
								<h3 className=" text-info font-weight-bolder bg-light p-1">
									<span className="code">&lt;</span> Artwork Gallery
									<span className="code">/&gt;</span>
								</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item
							style={{
								textAlign: "center",
							}}
							href="https://codepen.io/TorresjDev/pen/MWXoRWa"
							className="project project-tile bg-secondary"
							target="_blank"
						>
							<Image
								style={{
									width: "300px",
									height: "300px",
									objectFit: "contain",
								}}
								className="img-thumbnail my-3 pb-3"
								alt="project"
								src="https://i.ibb.co/jw55Bp8/magazine.jpg"
							/>

							<Carousel.Caption className="pt-8">
								<h3 className=" text-info font-weight-bolder bg-light p-1">
									<span className="code">&lt;</span> Magazine-Page
									<span className="code">/&gt;</span>
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
