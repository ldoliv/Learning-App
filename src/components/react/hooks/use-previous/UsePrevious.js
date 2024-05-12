import {useState, useEffect, useLayoutEffect, useRef} from 'react';


export function usePrevious(initialValue) {
	const [currentVal, setVal] = useState(initialValue);
	const ref = useRef();

	// the value is set only after the render, kind of having a setTimeout
	// The effect runs after the return!
	useEffect(() => {
		ref.current = currentVal;
	}, [currentVal]);

	return [currentVal, ref.current, setVal];
}


export function Counter() {
	const [currentVal, prevVal, setVal] = usePrevious(0);

	function handleCount() {
		setVal(curCount => curCount + 1);
	}

	return (
		<>
			<h1>Now: {currentVal}, before: {prevVal}</h1>
			<button onClick={handleCount}>Click</button>
		</>
	);
}
