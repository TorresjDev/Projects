import { Link } from "react-router-dom";

const CardList = ({ cards, title }) => {
	return (
		<div className="card-list">
			<h2>{title}</h2>
			{cards.map((card) => (
				<div className="card-preview" key={card.id}>
					<Link to={`/cards/${card.id}`}>
						<h2>{card.title}</h2>
						<p>Written by: {card.author}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default CardList;
