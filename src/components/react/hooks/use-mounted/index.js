import React from "react";
import { useMounted } from "./useMounted";

export default function TestUseMounted() {

	const mountedRef = useMounted();
	const [state, setState] = React.useState('old state');


	function simRequest() {
		setTimeout(() => {
			// console.log(mountedRef);

			if (mountedRef.current) {
				setState('new state');
			}
		}, 3000)
	}

	return (
		<div>
			<button onClick={simRequest}>Simulate Request</button>
			<div>State: {state}</div>
		</div>
	)
}