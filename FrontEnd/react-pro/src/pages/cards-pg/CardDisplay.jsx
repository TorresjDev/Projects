import Cardlist from "../../components/cards/CardList";
import useFetch from "../../services/useFetch";

const CardDisplay = () => {
	const {
		error,
		isPending,
		data: cards,
	} = useFetch("http://localhost:8000/cards");

	return (
		<div className="card-display">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{cards && <Cardlist cards={cards} />}
		</div>
	);
};

export default CardDisplay;
