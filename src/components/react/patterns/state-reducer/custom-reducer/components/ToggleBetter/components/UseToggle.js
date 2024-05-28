import {useReducer} from "react";



// Runs reducers from left to right, meaning that the last, the furthest to the right has the biggest priority
function mergeReducers(...reducers) {

	return (state, action) => {

		// reducer(state, action) can return undefined, no problem
		const merged = reducers.reduce((acc, reducer) => Object.assign(acc, reducer(state, action)), {});

		console.log('mergeReducers: %o', merged);
		return merged;
	}

}

// The first reducer function that returns a result is the one that sets the new state.
// All reducers that are after are not run

function runReducers(...reducers) {

	return (state, action) => {

		console.log('');
		console.log('runReducers total: %o', reducers.length);

		for (const [index, reducer] of reducers.entries()) {

			const result = reducer(state, action)
			console.log('runReducers result from reducer: %o, :%o', index, result);
			
			if (result && Object.keys(result).length) {
				return result;
			}

		}
	}
}

const actionTypes = {
	toggle: 'TOGGLE',
	on: 'ON',
	off: 'OFF'
}

function toggleReducer(state, action) {

	switch (action.type) {
		case actionTypes.toggle: {
			return {on: !state.on}
		}
		case actionTypes.on: {
			return {on: true}
		}
		case actionTypes.off: {
			return {on: false}
		}
		default: {
			throw new Error(`Unhandled type: ${action.type}`);
		}
	}
}

function useToggle({reducer = () => {}}) {

	// using runReducers -------------------------------------------

	// ✅ correct way		<=====
	const [{on}, dispatch] = useReducer(runReducers(reducer, toggleReducer), {on: false});

	// For every action dispatched, the runReducers runs one reducer after the other.

	// ❌ incorrect way, toggleReducer will always return a state, so "reducer" never gets to run
	// const [{on}, dispatch] = useReducer(runReducers(toggleReducer, reducer), {on: false});

	// using mergeReducers ------------------------------------------

	// ✅ correct way, our reducer has priority	<=====
	// const [{on}, dispatch] = useReducer(mergeReducers(toggleReducer, reducer), {on: false});

	// ❌ incorrect way, toggleReducer will override
	// const [{on}, dispatch] = useReducer(mergeReducers(reducer, toggleReducer), {on: false});

	const toggle = () => dispatch({type: actionTypes.toggle});
	const setOn = () => dispatch({type: actionTypes.on});
	const setOff = () => dispatch({type: actionTypes.off});

	return {on, toggle, setOn, setOff};
}

export {useToggle, actionTypes, toggleReducer, runReducers, mergeReducers}