
import config from "config";
import { toErrorInstance } from "./error";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const defaultRequestOpts = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
	failRate: 0, // Simulate failure rate, 0 means no failure
	delayT: 0 // Simulate delay in milliseconds
};

async function simulateNetworkConditions(delayT, failRate) {
	if (delayT) {
		await delay(delayT);
	}
	if (failRate >= Math.random()) {
		throw new Error('Forced fail');
	}
}

const request = async (url, opts) => {
	try {
		const options = Object.assign({}, defaultRequestOpts, opts);
		const {delayT, failRate, ...requestOpts} = options;

		await simulateNetworkConditions(delayT, failRate);

		const response = await fetch(`${config.API_BASE_URL}${url}`, requestOpts);
		if (!response.ok) {
			const errorData = await response.json();
			const error = new Error('Failed to fetch');
			error.response = response;
			error.data = errorData;
			throw error;
		}
		return await response.json();
	} catch (error) {
		if (error.response) {
			// HTTP error (response not ok)
			console.error(`HTTP Error: ${error.response.status} ${error.response.statusText}`, error.data);
		}
		throw toErrorInstance(error);
	}
};

export {request}
