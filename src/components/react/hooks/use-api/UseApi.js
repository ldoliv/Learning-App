import {useRef, useLayoutEffect, useCallback, useMemo, useState} from "react";

/*
	The useApi hook is a custom React hook designed to manage API interactions while ensuring that component state updates are safe and efficient. It wraps API methods to handle asynchronous operations, maintain a pending state, and ensure that updates only occur if the component is still mounted. This hook is particularly useful for preventing memory leaks and managing loading states in React applications.

	- Only sets state if the component is mounted
	- Sets state for status, data and error
*/

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

function useApi(apiMethods) {
	const [apiState, setState] = useState(() => {
		const initialState = {};
		for (const method in apiMethods) {
			initialState[method] = {
				status: getStatus(STATUS.IDLE),
				data: null,
				error: null,
			};
		}
		return initialState;
	});

	const mountedRef = useRef(true);
	const abortControllers = useRef({});

	useLayoutEffect(() => {
		return () => {
			mountedRef.current = false;
			// Abort any pending requests when the component unmounts
			Object.values(abortControllers.current).forEach(controller => controller.abort('Request aborted, component unmounted'));
		};
	}, []);

	const isMounted = useCallback(() => mountedRef.current, []);

	const wrapApiMethod = useCallback((methodName, method) => {
		return async (...args) => {
			
			const controller = new AbortController();
			abortControllers.current[methodName] = controller;

			setState(prevState => ({
				...prevState,
				[methodName]: {status: getStatus(STATUS.PENDING), data: prevState[methodName].data, error: prevState[methodName].error},
			}));

			try {
				const result = await method(...args, controller.signal);			// also pass the signal to the api method
				// const result = await method.call(this, ...args, controller.signal);			// also pass the signal to the api method

				if (isMounted()) {
					setState(prevState => ({
						...prevState,
						[methodName]: {status: getStatus(STATUS.RESOLVED), data: result, error: null},
					}));
					// return result;			// if we want to use .then()
				}
			} catch (err) {
				if (isMounted()) {
					setState(prevState => ({
						...prevState,
						[methodName]: {status: getStatus(STATUS.REJECTED), data: null, error: err},
					}));
					// throw err;				// if we want to use .catch()	if this is here and is not handled within the component using the hook, it will cause an unhandled error
				}
			} finally {
				delete abortControllers.current[methodName];
			}
		};
	}, [isMounted]);

	const reset = useCallback((methodNames) => {
		const methods = Array.isArray(methodNames) ? methodNames : [methodNames];

		setState(prevState => {
			const newState = {...prevState};
			methods.forEach(methodName => {

				const controller = abortControllers.current[methodName];
				if (controller) {
					controller.abort(`reset ${methodName}, cancelled any pending requests`);
				}

				if (apiMethods[methodName]) {
					newState[methodName] = {
						status: getStatus(STATUS.IDLE),
						data: null,
						error: null,
					};
				}
			});
			return newState;
		});
	}, [apiMethods]);


	const api = useMemo(() => {
		const wrappedMethods = {};
		for (const [name, method] of Object.entries(apiMethods)) {
			wrappedMethods[name] = wrapApiMethod(name, method);
		}
		return wrappedMethods;
	}, [apiMethods, wrapApiMethod]);

	return {apiState, api, reset};
}

export {useApi};
