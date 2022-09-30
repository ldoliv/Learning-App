import {useCount} from '../context/CountContext';


function Count() {

	const {count} = useCount();
	
	return (
		<div>Count: {count}</div>
	)
}

export {Count as default}