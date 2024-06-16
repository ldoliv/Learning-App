import {config} from "../../config";
import {createAxiosInstance} from "./axios";
import {getAccessToken, setAccessToken} from "../tokenService";



// Public request instance
const publicRequest = createAxiosInstance({
	baseURL: config.API_BASE_URL,
});

// Private request instance with authentication
const privateRequest = createAxiosInstance({
	baseURL: config.API_BASE_URL,
	useAuthentication: true,
	getAccessToken,
	setAccessToken,
	refreshTokenUrl: '/refresh',
});


export const apiMethods = {
	login: async (user, signal) => {
		return publicRequest.post('/login', user, {
			signal,
			withCredentials: true		// 👈 must be set for the endpoint that creates and sets the cookie
		});
	},
	logout: async (signal) => {
		return publicRequest.post('/logout', {}, {
			signal,
			withCredentials: true
		});
	},
	getTasks: async (signal) => {
		return privateRequest.get('/tasks', {
			signal,
			delayT: 200
		});
	},
};
