import {config} from "../../config";
import {delay} from "../helpers";
import {createRequest} from "./request";
import {getAccessToken, setAccessToken} from "../tokenService";

// run D:\SSD Work\Webapps\Node.js\jwt authentication for the server


const publicRequest = createRequest({
	baseURL: config.API_BASE_URL,
});

const privateRequest = createRequest({
	baseURL: config.API_BASE_URL,
	useAuthentication: true,
	getAccessToken,
	setAccessToken,
	refreshTokenUrl: '/refresh',
});

export const apiMethods = {
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
};
