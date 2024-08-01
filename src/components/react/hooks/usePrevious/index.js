import {usePrevious} from "./UsePrevious";


export default function ShowcaseUsePrevious() {
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