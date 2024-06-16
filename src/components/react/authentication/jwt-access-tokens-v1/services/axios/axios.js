import {toErrorInstance, simulateNetworkConditions} from "../helpers";
import axios, {AxiosError} from "axios";


const handleError = (error) => {
	if (error instanceof AxiosError) {
		return Promise.reject(toErrorInstance(error.message));
	} else if (error?.response) {
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
		getAccessToken: () => {},
		setAccessToken: () => {},
		refreshTokenUrl: '',
		refreshMaxRetries: 3,
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
			try {
				// Merge global config with request-specific config
				const config = {...globalConfig, ...requestConfig};
				const {delayT, failRate, useAuthentication, getAccessToken} = config;

				await simulateNetworkConditions(delayT, failRate);

				if (useAuthentication) {
					const token = await getAccessToken();
					if (!token) {
						throw new Error('No token to send');
					}
					requestConfig.headers['Authorization'] = `Bearer ${token}`;
				}
				requestConfig.retries = requestConfig.retries || 0;
				return requestConfig;

			} catch (error) {
				return handleError(error);
			}
		},
		error => handleError(error)
	);

	// Add response interceptor
	instance.interceptors.response.use(
		response => response.data, // on success
		async error => { // on error
			const prevRequest = error?.config;
			const {useAuthentication, setAccessToken, refreshTokenUrl, refreshMaxRetries} = globalConfig;

			if (useAuthentication && error?.response?.status === 401 && prevRequest.retries < refreshMaxRetries) {
				try {
					const refreshData = await instance.post(`${refreshTokenUrl}`, {}, {
						withCredentials: true,
						useAuthentication: false,
						retries: prevRequest.retries + 1
					});
					const newAccessToken = refreshData.accessToken;
					await setAccessToken(newAccessToken);

					prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
					return instance(prevRequest); // Retry the original request with new token

				} catch (refreshError) {
					return handleError(refreshError);
				}
			} else {
				return handleError(error);
			}

		}
	);

	return instance;
};
