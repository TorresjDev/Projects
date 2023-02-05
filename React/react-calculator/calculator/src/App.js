import "./App.css";
import { useState } from "react";
import Keypad from "./components/Keypad.jsx";

function App() {
	const [input, setInput] = useState("");
	const handleClick = (value) => {
		setInput(input + value);
	};
	const handleEquals = () => {
		setInput(eval(input).toString());
	};
	const handleClear = () => {
		setInput("");
	};

	return (
		<>
			<div className="App">
				<div className="calculator">
					<input type="text" className="display" value={input} readOnly />
					<Keypad
						handleClear={handleClear}
						handleClick={handleClick}
						handleEquals={handleEquals}
					/>{" "}
				</div>{" "}
			</div>{" "}
		</>
	);
}

export default App;
