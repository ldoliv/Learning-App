import React from "react";


// Hook that can be usefull to share state between siblings
// Similar to State Pool

export const createSharedState = (initialState) => {
	const callbacks = new Set();
	let state = initialState;

	const setSharedState = (newState) => {
		state = newState;
		callbacks.forEach(callback => callback(state));
	};

	// Keep in mind that the hook is initialized every time it is used in a component
	// so localState and setLocalState are bound to the component it's in, it's not shared
	function useSharedState() {
		const [localState, setLocalState] = React.useState(state);

		// thats why we add each independent setLocalState to the callbacks set
		const callbackRef = React.useRef((newState) => setLocalState(newState), []);

		React.useEffect(() => {
			callbacks.add(callbackRef.current);
			return () => callbacks.delete(callbackRef.current);
		}, []);

		// set state wrapper
		const setState = (newStateAction) => {
			const newState = typeof newStateAction === 'function'
				? newStateAction(state)
				: newStateAction;
			setSharedState(newState);
		};

		// Memoize the state and setState to ensure the array reference remains stable
		const memoizedState = React.useMemo(() => [localState, setState], [localState]);
		return memoizedState;

		// return [localState, setState]
	};

	return {
		useState: useSharedState
	}

};
