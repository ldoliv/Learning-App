import React, {useEffect} from 'react';
import {apiMethods} from './api';
import {useApi} from './UseApi';


export default function App() {

	const {apiState, api} = useApi(apiMethods);
	const {getTasks} = apiState;

	function handleClick() {
		api.getTasks()
	}

	console.log(getTasks.data);

	
	// Handle side effects here
	useEffect(() => {
		if (getTasks.status.resolved) {
			// handle success
		} else if (getTasks.status.rejected) {
			// handle rejected
		}
	
	}, [getTasks.status]);

	return (
		<div>
			<h2>Get tasks</h2>
			<button onClick={handleClick}>Make Request</button>
			<div className='mt-4'>
				{getTasks.status.pending && <div>Loading...</div>}
				{getTasks.status.resolved && (
					<>
						<h5>Tasks:</h5>
						<ul>{getTasks.data.map((task, idx) => <li key={idx}>{task.title}</li>)}</ul>
					</>
				)}
				{getTasks.status.rejected && (
					<>
						<h5>Error occured!</h5>
						<div>{getTasks.error instanceof Error ? getTasks.error.message : getTasks.error}</div>
					</>
				)}
			</div>
		</div>
	)
}
