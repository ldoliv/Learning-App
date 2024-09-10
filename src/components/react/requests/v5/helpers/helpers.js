class NetworkError extends Error {
	constructor (message, response, errorData) {
		super(`${message} - ${response.status} ${response.statusText}`);
		this.name = 'NetworkError';
		this.response = response;
		this.data = errorData;
	}
}

export const fetchApi = async (...args) => {
	// can immediately throw an error if the domain is unreachable, in which case it's handled within catch
	const response = await fetch(...args);
	const contentType = response.headers.get('Content-Type');
	const data = contentType && contentType.includes('json') ? await response.json() : await response.text();
	if (!response.ok) {
		throw new NetworkError('Failed to fetch', response, data);
	}
	return data;
}

export function toErrorInstance(e) {
	if (e instanceof Error) {
		return e;
	}

	// This part here is for dealing with unhandled errors that are not instances of Error
	let message = 'An unknown error occurred';
	if (typeof e === 'string') {
		message = e;
	} else if (typeof e === 'number') {
		message = `Error code: ${e}`;
	} else if (typeof e === 'object' && e !== null) {
		if (e.message) {
			message = e.message;
		} else {
			try {
				message = JSON.stringify(e);
			} catch (jsonError) {
				message = 'An error occurred, but it could not be stringified';
			}
		}
	}
	return new Error(message);
}

export function isObject(value) {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}
