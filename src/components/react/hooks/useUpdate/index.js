import {useState} from "react";
import {useUpdate} from "./useUpdate";



export default function ShowcaseUseUpdate() {

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