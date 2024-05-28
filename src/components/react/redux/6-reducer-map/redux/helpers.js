export const createActions = (reducerMap) => {
	return Object.keys(reducerMap).reduce((acc, type) => {
		acc[type] = (payload) => ({type, payload});	// action creators signature
		return acc;
	}, {});
}

export const createReducer = (reducerMap, initialState) => {
	return (state = initialState, action) => {	// reducer signature
		const handler = reducerMap[action.type];
		return handler ? handler(state, action.payload) : state
	}
}

export const createReducerTuple = (reducerMap, initialState) => {
	return [createActions(reducerMap), createReducer(reducerMap, initialState)];
}