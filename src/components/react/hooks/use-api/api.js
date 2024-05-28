// /services/api.js

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const apiMethods = {
	login: async (user) => {
		await delay(1000);
		const {username, password} = user;
		if (username === 'leo123' && password === '123') {
			return {
				name: 'Leo',
				username: 'leo123',
				token: 'asdf65asdf654asd6f54asf'
			};
		}
		throw new Error('User not found!');
	},
	logout: async () => {
		await delay(1000);
		return true;
	},
	getTasks: async () => {
		await delay(1000);

		const random = Math.random();
		if (random > 0.5) {
			return [{
				id: 1,
				title: 'Walk the dog',
				reminder: true
			}, {
				id: 2,
				title: 'Clean the pool',
				reminder: false
			}, {
				id: 3,
				title: 'Wash dishes',
				reminder: false
			}]
		}
		throw new Error('Something went wrong')


		// try {
		// 	const response = await fetch('');
		// 	const data = await response.json();
		// } catch (error) {

		// }
	}
};