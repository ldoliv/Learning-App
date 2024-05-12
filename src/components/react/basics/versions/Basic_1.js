import React from "react";
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';


// Run an effect on the child component when a prop value changes.


function Child({number}) {
	const renderCount = useRenderCounter(0);
	const [num, setNum] = React.useState(number);

	React.useEffect(() => {

		// console.log('run effect');
		let timer = setTimeout(() => {
			setNum(number);
		}, 500);

		return () => {
			clearTimeout(timer);
		}

	}, [number]);

	return (
		<div className="d-flex align-items-center">
			{renderCount} <h3>Child component, number: {num}</h3>
		</div>
	)
}


// Parent
export default function Parent() {
	const [number, setNumber] = React.useState(0);
	const renderCount = useRenderCounter(0);

	// Function to generate a random number.
	// Generates a new number until its different from the previous generated number.
	function generateNumber() {
		let newNumber = 0;
		do {
			newNumber = Math.floor(Math.random() * 10);
		} while (newNumber === number);
		setNumber(newNumber);
	}

	return (
		<>
			<button className="mb-3" onClick={generateNumber}>Update</button>

			<div className="d-flex align-items-center">
				{renderCount} <h1>Parent Component</h1>
			</div>
			<Child number={number} />
		</>
	)
}