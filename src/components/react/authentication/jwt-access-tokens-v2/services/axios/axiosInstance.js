import {toErrorInstance, simulateNetworkConditions} from "../helpers";
import axios from "axios";

export const handleError = (error) => {
	if (error?.response) {
		return Promise.reject(toErrorInstance(`HTTP Error: ${error.response.status} ${error.response.statusText} ${error.response.data}`));
	} else {
		return Promise.reject(toErrorInstance(error));
	}
};

// Create a custom Axios instance
export const createAxiosInstance = (opts = {}) => {
	
	const defaultGlobal = {
		baseURL: '',
		useAuthentication: false,
		failRate: 0,
		delayT: 0,
	};

	const globalConfig = {...defaultGlobal, ...opts};

	const instance = axios.create({
		baseURL: globalConfig.baseURL,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	// Add request interceptor
	instance.interceptors.request.use(
		async (requestConfig) => {

			// Merge specific config with global config
			const config = {...globalConfig, ...requestConfig};
			const {delayT, failRate} = config;

			await simulateNetworkConditions(delayT, failRate);

			return requestConfig;

		},
		error => handleError(error)
	);

	// Add response interceptor
	instance.interceptors.response.use(
		response => response.data, // on success
		async error => { 				// on error
			if (globalConfig.useAuthentication) {
				return Promise.reject(error);
			} else {
				return handleError(error);
			}
		}
	);

	return instance;
};
