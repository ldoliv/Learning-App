import React from "react";
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';
/*
	https://blog.bitsrc.io/how-to-make-your-react-application-even-faster-3efe9387cbb1
*/

/*
	When state changes in the parent, Child components will always render
*/


function Child(props) {
	const renderCount = useRenderCounter(0);
	return (
		<div className="mb-3">{renderCount} Child component</div>
	)
}

export default function Memo1(props) {

	const [, setState] = React.useState();

	function update() {
		setState({});
	}

	return (
		<div>
			<Child />
			<button onClick={update}>Update parent component</button>
		</div>
	)
}

