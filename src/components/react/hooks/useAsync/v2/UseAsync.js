import {useState, useCallback, useRef, useLayoutEffect} from 'react';


const STATUS = {
	IDLE: 'IDLE',
	PENDING: 'PENDING',
	RESOLVED: 'RESOLVED',
	REJECTED: 'REJECTED'
}

function getStatus(status) {
	return {
		idle: status === STATUS.IDLE,
		pending: status === STATUS.PENDING,
		resolved: status === STATUS.RESOLVED,
		rejected: status === STATUS.REJECTED
	};
}

function useAsync(asyncFn = null, options = {}) {

	const opts = {
		withState: true,
		delay: 0,
		failRate: 0,
		abortRequest: false,
		...options
	}

	const [state, setState] = useState({
		status: getStatus(STATUS.IDLE),
		data: null,
		error: null
	});
	const mounted = useRef(true);
	const abortController = useRef(null);

	useLayoutEffect(() => {
		return () => {
			mounted.current = false;
			if (abortController.current) {
				abortController.current.abort('Request aborted, component unmounted');
			}
		};
	}, []);

	const asyncHOF = useCallback(
		async (...args) => {

			if (!asyncFn) {
				throw new Error('No async function provided');
			}

			try {
				abortController.current = opts.abortRequest ? new AbortController() : null;

				if (opts.withState) {
					setState(prevState => ({...prevState, status: getStatus(STATUS.PENDING)}));
				}

				await simulateConditions(opts.delay, opts.failRate);

				let result = null;

				if (opts.abortRequest) {
					if (isObject(args[0])) {
						args[0].signal = abortController.current.signal;
						result = await asyncFn(...args);
					} else {
						result = await asyncFn(...args, {signal: abortController.current.signal});
					}
				} else {
					result = await asyncFn(...args);
				}

				if (mounted.current) {
					if (opts.withState) {
						setState({status: getStatus(STATUS.RESOLVED), data: result, error: null});
					} else {
						return result;
					}
				}
			} catch (error) {
				console.log(error);
				if (mounted.current) {
					if (opts.withState) {
						setState({status: getStatus(STATUS.REJECTED), data: null, error: error instanceof Error ? error : toErrorInstance(error)});
					} else {
						throw error instanceof Error ? error : toErrorInstance(error);
					}
				}
			} finally {
				abortController.current = null;
			}
		},
		[asyncFn, opts.delay, opts.failRate, opts.abortRequest, opts.withState]
	);

	const reset = useCallback(() => {
		if (abortController.current) {
			abortController.current.abort('reset, cancelled pending requests');
		}
		setState({
			status: getStatus(STATUS.IDLE),
			data: null,
			error: null
		});
	}, []);

	return opts.withState ? [state, asyncHOF, reset] : [asyncHOF];
}


function toErrorInstance(e) {
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

function isObject(value) {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const simulateConditions = async (delayT, failRate) => {
	if (delayT) await delay(delayT);
	if (failRate > Math.random()) throw new Error('Forced fail');
};

export {useAsync};
