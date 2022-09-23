import {useReducer} from 'react';


export function useReducerMap(reducerMap, initialState) {
	return useReducer(reducer(reducerMap), initialState);
}


// Action signature:
// (payload) => {type, payload} is then passed to the reducer function

export function createActions(reducerMap) {
	return Object.keys(reducerMap).reduce((acc, type) => {
		acc[type] = (payload) => ({
			type,
			payload
		})
		return acc;
	}, {});
}

// Reducer
function reducer(reducerMap) {
	return (state, {type, payload}) => {
		const handler = reducerMap[type];
		return handler ? handler(state, payload) : state;
	}
}



