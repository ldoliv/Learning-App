import React from "react";
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';


// Hummmmm, not working as expected.
// I expected both components to update simultaneosly because they share the count state.

// Not working. To pass between sibling use Context or the trigger-state-service


// const global = {
// 	count: 0,
// 	setCount: () => {}
// }

function useCounter() {
	const [count, setCount] = React.useState(0);
	const [, setUpdate] = React.useState();
	
	const memoized = React.useMemo(() => [count, setCount], [count]);

	// React.useEffect(() => {
	// 	setUpdate({});
	// }, [count]);

	return memoized;
}

function useService(fn) {
	const [, setUpdate] = React.useState();
	const fnRef = React.useRef(fn);

	function setVal(...args) {
		fnRef.current(...args);
		setUpdate({});
	}

	return {
		setVal
	}
}

let service = [];

function CompA({number}) {
	const renderCount = useRenderCounter(0);
	service = useCounter();
	const [count, setCount] = service;

	// React.useEffect(() => {
	// 	service
	// }, []);

	return (
		<div>
			{renderCount} <h3 onClick={() => setCount(count + 1)}>Component A: {count}</h3>
		</div>
	)
}

function CompB({number}) {
	const renderCount = useRenderCounter(0);
	const [count, setCount] = service;


	return (
		<div>
			{renderCount} <h3 onClick={() => setCount(count => count + 1)}>Component B: {count} </h3>
		</div>
	)
}

export default function App() {
	return (
		<>
			<CompA />
			<CompB />
		</>
	)
}