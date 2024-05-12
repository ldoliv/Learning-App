import React, {useEffect, useState, useRef} from "react"
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';


// https://hackernoon.com/top-3-coding-challenges-for-expert-level-react-developers
// Top 3 Coding Challenges for Expert-Level React Developers

// ---------------------------------------------------------------
//  Create a Higher-Order Component to reuse component logic
// ---------------------------------------------------------------

/*
	- Create three different components that have similar component logic.
	- To achieve this create a Higher-Order Component to be reused by the three components. 

	For this challenge, you have three components, each containing a button that increments the value in the state by a specific number. Suppose, three components are:

	“ComponentA” where the button increments the value by two.
	“ComponentB” where the button increments the value by twenty.
	“ComponentC” where the button increments the value by two hundred.
*/

/*
	Things that come to mind with hocs:
		- The added functionality of the hoc has to get passed to the component it receives, and so it passes it down through props

*/


function useCount(initVal, incrementBy = 1) {
	const [count, setCount] = useState(initVal);

	// const increment = () => setCount(count + incrementBy);
	const increment = React.useCallback(() => setCount(count => count + incrementBy), [incrementBy]);

	return [count, increment];
}


function BaseComp(props) {
	const renderCount = useRenderCounter(0);
	const [count, increment] = useCount(props.initVal, props.incrementBy);

	return (
		<>
			<div>Parent: {renderCount}</div>
			<div className="mb-4 container-fluid">
				<div className="row">
					
					<div className="col-auto">
						<div>Count: {count}</div>
					</div>
				</div>

				<ChildComp increment={increment} incrementBy={props.incrementBy} />
			</div>
		</>
	)
}

function ChildComp(props) {
	const renderCount = useRenderCounter(0);
	const {increment, count, incrementBy} = props;

	return (
		<>
			<div>Child: {renderCount}</div>
			<div className="col-auto">
				<button onClick={increment}>Increment by {incrementBy}</button>
			</div>
		</>
	)
}

// eslint-disable-next-line no-func-assign
ChildComp = React.memo(ChildComp);



export function App() {

	return (
		<>
			<BaseComp initVal={10} incrementBy={2} />
			{/* <BaseComp initVal={2} incrementBy={20} /> */}
			{/* <BaseComp initVal={0} incrementBy={200} /> */}
		</>
	)
}