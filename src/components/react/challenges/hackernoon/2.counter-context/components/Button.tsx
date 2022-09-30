
import {useCount, increment} from '../context/CountContext';


function Button() {

	const {dispatch} = useCount();

	function handleClick() {
		increment(dispatch)
	}

	return (
		<button onClick={handleClick}>Increment</button>
	)
}

export {Button as default}