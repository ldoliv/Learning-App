import React, {useEffect, useState, useRef} from "react"



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

/*
type baseCompPropsT = {
	onClick: () => {};
	increment: () => {};
	count: number;
}

function BaseComp(props: baseCompPropsT) {

	const {onClick, increment, count} = props;

	return (
		<div className="mb-4 container-fluid">
			<div className="row">
				<div className="col-auto">
					<button onClick={onClick}>Increment by {increment}</button>
				</div>
				<div className="col-auto">
					<div>Count: {count}</div>
				</div>
			</div>
		</div>
	)
}

type hocPropsT = {
	initValue: number;
}

function IncrementHOC(Comp: Element, increment = 1) {
	return function Component(props: hocPropsT) {

		const {initValue = 0} = props;
		const [count, setCount] = useState(initValue);

		const handleClick = () => setCount(count + increment);

		return (
			<Comp {...props} count={count} increment={increment} onClick={handleClick} />
		)
	}
}


const IncrementByTwo = IncrementHOC(BaseComp, 2);
const IncrementByTwenty = IncrementHOC(BaseComp, 20);
const IncrementByTwohundred = IncrementHOC(BaseComp, 200);


export function App() {

	return (
		<>
			<IncrementByTwo initValue={10} />
			<IncrementByTwenty initValue={2} />
			<IncrementByTwohundred initValue={0} />
		</>
	)
}
*/