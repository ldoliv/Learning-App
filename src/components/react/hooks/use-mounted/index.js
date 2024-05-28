import React, {useMemo} from "react";
import { useMounted } from "./useMounted";

export default function TestUseMounted() {

	const isMounted = useMounted();
	const [state, setState] = React.useState('old state');


	function simRequest() {
		setTimeout(() => {
			console.log(isMounted());

			if (isMounted()) {
				setState('new state');
			}
		}, 2500)
	}

	return (
		<div>
			<div className="mb-3">Click the button and then click back, check the console</div>
			<button onClick={simRequest}>Simulate Request</button>
			<div>State: {state}</div>
		</div>
	)
}