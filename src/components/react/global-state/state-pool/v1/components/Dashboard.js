import {useState} from 'state-pool';
import {globalCount} from "../StatePool_1";


export default function Dashboard(props) {

	const [, setCount] = useState(globalCount);

	const incCount = () => {
		setCount(count => count + 1)
	}
	const decCount = () => {
		setCount(count => count - 1)
	}
	
	return (
		<div>
			<button onClick={incCount}>Increment</button>
			<button onClick={decCount}>Decrement</button>
		</div>
	)
}
