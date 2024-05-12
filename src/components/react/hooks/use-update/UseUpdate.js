import {useState, useEffect, useRef} from 'react';


// an effect that doesn't run on init
// ignores the first render

export function useUpdate(callback, deps = []) {
	const ref = useRef(true);

	useEffect(() => {
		// the first time it runs it ignores
		if (ref.current) {
			ref.current = false;
			return;
		}
		return callback();

	}, [callback, ...deps])
}


export function Showcase() {

	const [count, setCount] = useState(0);

	// ✅ runs only when 'count' changes, and not on mount
	useUpdate(() => {
		console.log('useUpdate');
	}, [count])

	// VS
	// ❌ runs on mount and whenever 'count' changes
	// useEffect(() => {
	// 	console.log('useEffect');
	// }, [count])


	function increment() {
		setCount(count + 1);
	}

	return (
		<>
			<div>Count: {count}</div>
			<button onClick={increment}>Increment</button>
		</>
	)
}