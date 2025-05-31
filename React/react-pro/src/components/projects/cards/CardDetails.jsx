import { useHistory, useParams } from "react-router-dom";
import React from "react";
import useFetch from "../../../services/useFetch";

const CardDetails = () => {
	const { id } = useParams();
	const { data: blog, error, isPending } = useFetch(
		"http://localhost:8000/cards/" + id,
	);
	const history = useHistory();

	const handleClick = () => {
		fetch("http://localhost:8000/cards/" + blog.id, {
			method: "DELETE",
		}).then(() => {
			history.push("/cards");
		});
	};

	return (
		<div className="card-details">
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleClick}>delete</button>
				</article>
			)}
		</div>
	);
};

export default CardDetails;
