import {delay, toErrorInstance} from "../helpers";

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
	getAccessToken: null,
	setAccessToken: null,
	refreshTokenUrl: '',
};

const simulateNetworkConditions = async (delayT, failRate) => {
	if (delayT) await delay(delayT);
	if (failRate >= Math.random()) throw new Error('Forced fail');
};

const handleToken = async (config) => {
	if (config.useAuthentication) {
		const token = await config.getAccessToken();
		if (!token) throw new Error('No token to send');
		config.headers['Authorization'] = `Bearer ${token}`;
	}
};

const refreshAccessToken = async (config, makeRequest) => {
	const refreshData = await makeRequest(config.refreshTokenUrl, {
		method: 'POST',
		credentials: 'include',
		useAuthentication: false,
		headers: {},
	});

	if (refreshData.accessToken) {
		const newAccessToken = refreshData.accessToken;
		await config.setAccessToken(newAccessToken);
		return newAccessToken;
	}

	throw new Error('Failed to refresh access token');
};

const handleErrorResponse = async (response, config, url, makeRequest) => {

	if (config.useAuthentication && response.status === 401) {
		const newAccessToken = await refreshAccessToken(config, makeRequest);

		config.headers['Authorization'] = `Bearer ${newAccessToken}`;
		return makeRequest(url, config);
	}

	const errorData = await handleResponse(response);
	throw new Error(`HTTP Error: ${response.status} ${response.statusText} ${errorData}`);
};

const handleResponse = async (response) => {
	const contentType = response.headers.get('Content-Type');

	if (contentType.includes('application/json')) {
		return await response.json();
	} else if (contentType.includes('text/plain')) {
		return await response.text();
	} else if (contentType.includes('text/html')) {
		return await response.text(); // or use response.blob() if you want the raw data
	} else {
		// Handle other content types if needed
		return await response.text(); // Default to text
	}
};

const createRequest = (opts) => {

	const config = {...defaultGlobal, ...opts};

	const makeRequest = async (url, opts = {}) => {

		try {
			const requestConfig = {...config, ...opts, url};

			await handleToken(requestConfig);

			const {baseURL, useAuthentication, delayT, failRate, ...requestOpts} = requestConfig;

			await simulateNetworkConditions(delayT, failRate);

			const response = await fetch(`${baseURL}${url}`, requestOpts);

			if (!response.ok) {
				return await handleErrorResponse(response, requestConfig, url, makeRequest);
			} else {
				return await handleResponse(response);
			}
		} catch (error) {
			console.log(error);
			throw toErrorInstance(error);
		}
	};

	return makeRequest;
};

export {createRequest};
