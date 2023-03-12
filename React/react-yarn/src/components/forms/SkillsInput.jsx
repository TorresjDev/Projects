import React, { useState } from "react";

function SkillsInput() {
	const [state, setState] = useState({
		skills: [],
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const skillInput = e.target.elements.skills;
		let newSkills = [];
		console.log("handleSubmit", { newSkills, skillInput, e });

		if (skillInput.name === "skills") {
			newSkills = skillInput.value.split(",").map((skill) => skill.trim());
		}
		console.log("handleSubmit", { newSkills, skillInput });

		if (newSkills.length) {
			setState((prevState) => ({
				...prevState,
				skills: [...prevState.skills, ...newSkills],
			}));
		}

		// Clear the input field after submitting
		skillInput.value = "";
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<div className="card">
						<div className="card-header">Hello</div>
						<div className="card-body">
							<form onSubmit={handleSubmit}>
								<div className="mb-3 col-md-6 mx-auto">
									<label htmlFor="skills" className="form-label">
										Skills (use commas to separate skills)
										<input
											type="text"
											className="form-control"
											placeholder="Enter skills required for job"
											id="skills"
											name="skills"
											required
										></input>
									</label>
									<button type="submit" className="btn btn-success">
										+ skill
									</button>
									<ul>
										{state.skills.map((skill, index) => (
											<li key={index}>{skill}</li>
										))}
									</ul>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsInput;
