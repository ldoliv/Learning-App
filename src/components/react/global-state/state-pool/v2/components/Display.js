
import {store} from "../StatePool_2";


export default function Display(props) {

	const [count] = store.useState('count');
	const [user] = store.useState('user');

	return (
		<div {...props}>
			<div>Current count: {count}</div>
			<div>User: {user.name}</div>
		</div>
	)
}
