import {delay} from "../helpers";
import {publicRequest} from "./axios";
import {useAxiosPrivate} from "./useAxiosPrivate";



export function useAxios() {

	const privateRequest = useAxiosPrivate();

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
		refresh: async (user, signal) => {
			return publicRequest.post('/refresh', {}, {
				signal,
				withCredentials: true
			});
		},
		login: async (user, signal) => {
			return publicRequest.post('/login', user, {
				signal,
				withCredentials: true		// Required to be able to create the cookie
			});
		},
		logout: async (signal) => {
			return publicRequest.post('/logout', {}, {
				signal,
				withCredentials: true		// Required to be able to delete the cookie
			});
		},
		getTasks: async (signal) => {
			return privateRequest.get('/tasks', {
				signal,
				delayT: 500
			});
		},
		getTask: async (id, signal) => {
			return privateRequest.get(`/tasks/${id}`, {
				signal,
				delayT: 500
			})
		},
		deleteTask: async (id, signal) => {
			return privateRequest.delete(`/tasks/${id}`, {
				signal,
				failRate: 0.3
			})
		},
		updateTask: async (task, signal) => {
			return privateRequest.put(`/tasks/${task.id}`, task, {
				signal,
				failRate: 0.5,
				delayT: 500
			})
		},
		addTask: async (task, signal) => {
			return privateRequest.post(`/tasks`, task, {
				signal,
				delayT: 1000
			})
		}
	}
}
