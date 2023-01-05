import React from "react";
import parallaxIMG from "../../img/img-iii.jpg";

const LandingPage = () => {
	return (
		<div className="jumbotron jumbotron-fluid bg-transparent m-0">
			<div className="container-fluid p-0">
				<div className="parallax">
					<img src={parallaxIMG} alt="Parallax" />

					<div className="container pt-5 pb-5 text-center text-light">
						<h1 className="display-4">Welcome to My App!</h1>
						<p className="lead">
							This is the landing page for the home component.
						</p>
						<button className="btn btn-primary btn-lg">Learn More</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
