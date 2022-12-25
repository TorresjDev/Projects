import React from "react";
import videoBg from "../../vid/sunrise.mp4";
import moonImg from "../../img/home/moon-img-iii.png";
function Home(props) {
	// console.log(props);
	// const user = props.user;
	return (
		<React.Fragment>
			<div className="container home-main">
				<div class="home-overlay"></div>
				<video src={videoBg} autoPlay loop muted />
				<div class="home-content">
					<a href="/parallax-website/index.html">
						<img src={moonImg} alt="logo" />
					</a>
					<h2>Jesus Torres</h2>
					<p>Software Engineer</p>
					<a
						href="#about"
						class="fa fa-chevron-circle-down fa-5x"
						style={{ opacity: "10%" }}
					>
						Scroll
					</a>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
