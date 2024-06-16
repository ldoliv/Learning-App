export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const simulateNetworkConditions = async (delayT, failRate) => {
	if (delayT) await delay(delayT);
	if (failRate >= Math.random()) throw new Error('Forced fail');
};

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

