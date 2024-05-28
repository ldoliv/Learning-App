import {store} from '../StatePool_2';


export default function Dashboard(props) {

	const [, setCount] = store.useState('count');
	const [, setUser] = store.useState('user');


	const incCount = () => {
		setCount(count => count + 1)
	}
	const decCount = () => {
		setCount(count => count - 1)
	}

	const updateUser = () => {
		setUser(user => ({
			...user,
			name: 'Leo'
		}))
	}
	
	return (
		<>
			<div className='row mb-4 gx-2'>
				<div className="col-auto">
					<button onClick={incCount}>Increment</button>
				</div>
				<div className="col-auto">
					<button onClick={decCount}>Decrement</button>
				</div>
			</div>
			<div className="row">
				<div className="col-auto">
					<button onClick={updateUser}>Update name</button>
				</div>
			</div>
		</>
	)
}
