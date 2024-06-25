import {toErrorInstance, simulateNetworkConditions} from "../helpers";

const defaultGlobal = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
	credentials: 'omit',
	baseURL: '',
	useAuthentication: false,
	failRate: 0,
	delayT: 0,
};


export const handleError = (error) => {
	if (error?.response) {
		return Promise.reject(toErrorInstance(`HTTP Error: ${error.response.status} ${error.response.statusText} ${error.response.data}`));
	} else {
		return Promise.reject(toErrorInstance(error));
	}
};

const handleResponse = async (response) => {
	if (response instanceof Response) {
		const contentType = response.headers.get('Content-Type');

		if (contentType.includes('application/json')) {
			return await response.json();
		} else {
			return await response.text(); // Default to text
		}
	} else {
		return response;
	}
};

const createFetchInstance = (opts) => {

	const config = {...defaultGlobal, ...opts};
	const requestInterceptors = new Set();
	let responseInterceptor = null;

	const instance = async (url, opts = {}) => {

		try {

			const requestConfig = {...config, ...opts, url};

			// handleToken(requestConfig);
			requestInterceptors.forEach(callback => callback(requestConfig));

			// Extract non fetch options just in case
			const {baseURL, useAuthentication, delayT, failRate, ...requestOpts} = requestConfig;

			await simulateNetworkConditions(delayT, failRate);

			
			let response = await fetch(`${baseURL}${url}`, requestOpts);
			

			if (!response.ok) {
				
				try {

					if (responseInterceptor) {
						
						const responseData = await responseInterceptor(response, requestConfig, instance);
						console.log('response from interceptor: %o', responseData);
						return responseData

					} else {
						const responseData = await handleResponse(response);
						console.log('response from interceptor: %o', responseData);
						return responseData
					}

				} catch (err) {

					console.log('interceptor error: %o', err);
					const responseData = await handleResponse(response);
					return Promise.reject(new Error(`HTTP Error: ${response.status} ${response.statusText} ${responseData}`));
					// throw new Error(`HTTP Error: ${response.status} ${response.statusText} ${responseData}`);
				}

			} else {

				const responseData = await handleResponse(response);
				console.log('success response: %o', responseData);

				return responseData;
			}
		} catch (error) {
			// console.error('Error: %o', error);
			// return Promise.reject(toErrorInstance(error));
			throw toErrorInstance(error);
		}
	};

	instance.addRequestInterceptor = (callback) => {
		if (!requestInterceptors.has(callback)) {
			requestInterceptors.add(callback);
		}
	}
	instance.addResponseInterceptor = (callback) => {
		responseInterceptor = callback;
		// if (!responseInterceptors.has(callback)) {
		// 	responseInterceptors.add(callback);
		// }
	}

	instance.removeRequestInterceptor = (callback) => {
		requestInterceptors.delete(callback);
	}
	instance.removeResponseInterceptor = (callback) => {
		responseInterceptor = null;
		// responseInterceptors.delete(callback);
	}

	return instance;
};

export {createFetchInstance};
