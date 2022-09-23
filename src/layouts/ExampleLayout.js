import React from "react";
import {useNavUp} from "contexts/RoutesContext";


function ExampleLayout(props) {

	const [navUp] = useNavUp();

	return (
		<div className="answer py-4 px-1 px-sm-0">
			<div className="container">
				<div className="btn btn-outline-secondary mb-5" onClick={navUp}>Back</div>
				<div className="answer-body output">
					{props.children}
				</div>
			</div>
		</div>
	);
}

// eslint-disable-next-line no-func-assign
ExampleLayout = React.memo(ExampleLayout);

export {ExampleLayout};