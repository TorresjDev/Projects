import React, { useState } from 'react';
import HistoryDisplay from './HistoryDisplay';
import HistoryList from './HistoryList';
import HistoryPlaceholder from './HistoryPlaceholder';

function history() {
	const [history, setHistory] = useState({});
	const [showHistory, setHistoryShow] = useState(false);
	const [showPlaceholder, setShowPlaceholder] = useState(true);

	const onClick = (HistoryData) => {
		setHistory(HistoryData);
		setHistoryShow(true);
		setShowPlaceholder(false);
	};
	return (
		<React.Fragment>
			<div className="container-fluid">
				<h1 className="p-1 mx-auto">history</h1>
				<div className="row m-1">
					<div className="float-start left col-md-8 m-auto">
						{showHistory && <HistoryDisplay HistoryData={history} />}
						{showPlaceholder && (
							<HistoryPlaceholder HistoryData={history} />
						)}
					</div>
					{/* <div className="col-md-1">hi</div> */}
					<div className="float-end rounded right col-md-4 m-auto bg-light border border-dark shadow p-1">
						<HistoryList click={onClick} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default history;
