import {useState} from 'state-pool';
import {globalCount} from "../StatePool_1";



export default function Display(props) {

	const [count] = useState(globalCount);

	return (
		<div>Current count: {count}</div>
	)
}
