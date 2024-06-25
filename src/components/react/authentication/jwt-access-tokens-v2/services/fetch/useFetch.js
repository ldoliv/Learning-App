import {delay} from "../helpers";
import {publicRequest} from "./fetch";
import {useFetchPrivate} from "./useFetchPrivate";



export function useFetch() {

	const privateRequest = useFetchPrivate();

	return {
		loginFake: async (user) => {
			await delay(500);
			const {username, password} = user;
			if (username === 'leo123' && password === '123') {
				return {
					name: 'Leo',
					username: 'leo123',
					token: 'asdf65asdf654asd6f54asf',
				};
			}
			throw new Error('User not found!');
		},
		refresh: async (signal) => {
			return publicRequest('/refresh', {
				signal,
				method: 'POST',
				credentials: 'include',
			});
		},
		login: async (user, signal) => {
			return publicRequest('/login', {
				signal,
				method: 'POST',
				body: JSON.stringify(user),
				credentials: 'include',		// 👈 must be set for the endpoint that creates and sets the cookie
			});
		},
		logout: async (signal) => {
			return publicRequest('/logout', {
				signal,
				method: 'POST',
				body: JSON.stringify({}),
				credentials: 'include',		// 👈 must be set for the endpoint that creates and sets the cookie
			});
		},
		getTasks: async (signal) => {
			return privateRequest('/tasks', {
				signal,
			});
		},
		getTask: async (id, signal) => {
			return privateRequest(`/tasks/${id}`, {
				signal,
				delayT: 1000
			})
		},
		deleteTask: async (id, signal) => {
			return privateRequest(`/tasks/${id}`, {
				signal,
				method: 'DELETE',
				failRate: 0.3
			})
		},
		updateTask: async (task, signal) => {
			return privateRequest(`/tasks/${task.id}`, {
				signal,
				method: 'PUT',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(task),
				failRate: 0.5,
				delayT: 1000
			})
		},
		addTask: async (task, signal) => {
			return privateRequest(`/tasks`, {
				signal,
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(task),
				delayT: 1000
			})
		}
	};

}
