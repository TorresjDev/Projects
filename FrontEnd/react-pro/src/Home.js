import { useState } from "react";

const Home = () => {
	const [name, setName] = useState("World");
	const [age, setAge] = useState(26);

	const handleClick = () => {
		setName("Jesus");
		setAge(age + 1);
	};

	return (
		<div className="home">
			<h2>Homepage</h2>
			<p>Hello, {name}</p>
			<p>Seen, {age}</p>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
};

export default Home;
