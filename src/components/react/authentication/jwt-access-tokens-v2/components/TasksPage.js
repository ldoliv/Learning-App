import React, {useEffect, useState} from 'react';
import {useAuthContext, authActions} from '../contexts/AuthProvider';
// import {useAxios} from '../services/axios/useAxios';
import {useApiMethods} from '../hooks/useApiMethods';



export default function TasksPage() {

	const apiMethods = useApiMethods();
	const {auth, dispatch} = useAuthContext();
	const {authenticated, user, error} = auth;
	
	const [tasks, setTasks] = useState(null);
	const [loading, setLoading] = useState(false);


	const handleLogin = async () => {
		try {
			const response = await apiMethods.login({
				username: 'leo123',
				password: '123'
			});

			dispatch(authActions.loginSuccess(response));

		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	const handleLogout = async () => {
		try {
			await apiMethods.logout();
			dispatch(authActions.logout());

		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	const getTasks = async () => {
		try {
			setLoading(true);
			const tasksResponse = await apiMethods.getTasks();
			console.log(tasksResponse);
			setTasks(tasksResponse);
		} catch (error) {
			console.error("Failed to fetch tasks:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (authenticated) {
			getTasks();
		} else {
			setTasks(null);
		}
	}, [authenticated]);

	return (
		<>
			<h3 className="mb-4">Jwt Authentication</h3>
			<p>Login and hit F5, then checkout PersistLogin component</p>
			<div className="row gx-2">
				<div className="col-auto">
					<button className="btn btn-light" onClick={handleLogin}>Login</button>
				</div>
				{authenticated && <div className="col-auto">
					<button className="btn btn-light" onClick={handleLogout}>Logout</button>
				</div>}
				<div className="col-auto">
					<button className="btn btn-light" onClick={getTasks}>Get tasks</button>
				</div>
			</div>
			
			{error && <h4 className='my-4'>{error.message}</h4>}

			{authenticated && <h4 className="my-4">Welcome {user.username}</h4>}
			{loading && <h6 className="my-4">Loading...</h6>}

			{
				tasks && (
					<ul className="my-4">
						{tasks.map(task => <li key={task.id}>{task.title}, reminder: {task.reminder ? 'true' : 'false'}</li>)}
					</ul>
				)
			}
		</>
	)
}
