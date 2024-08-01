import React, {useEffect} from 'react';
import {apiMethods} from './api';
import {useApi} from './useApi';


// For more in depth see Task Manager project


export default function App() {

	const {apiState, api} = useApi(apiMethods);
	const {getTasks: getTasksResponse} = apiState;

	function handleClick() {
		api.getTasks()
	}

	console.log({
		...getTasksResponse,
		status: Object.keys(getTasksResponse.status).find(status => getTasksResponse.status[status])
	});

	
	// Handle side effects here
	useEffect(() => {
		if (getTasksResponse.status.resolved) {
			// handle success
		} else if (getTasksResponse.status.rejected) {
			// handle rejected
		}
	
	}, [getTasksResponse.status]);

	return (
		<div>
			<h2>Get tasks</h2>
			<button onClick={handleClick}>Make Request</button>
			<div className='mt-4'>
				{getTasksResponse.status.pending && <div>Loading...</div>}
				{getTasksResponse.status.resolved && (
					<>
						<h5>Tasks:</h5>
						<ul>{getTasksResponse.data.map((task, idx) => <li key={idx}>{task.title}</li>)}</ul>
					</>
				)}
				{getTasksResponse.status.rejected && (
					<>
						<h5>Error occured!</h5>
						<div>{getTasksResponse.error instanceof Error ? getTasksResponse.error.message : getTasksResponse.error}</div>
					</>
				)}
			</div>
		</div>
	)
}
