


type actionFnT<T, PayloadT> = {
	[Key in keyof T]: (payload: PayloadT) => ({type: Key, payload: PayloadT})
}

function createActions<T extends {}, PayloadT>(reducerMap: T): actionFnT<T, PayloadT> {

	return Object.keys(reducerMap).reduce<any>((acc, type) => {
		acc[type] = (payload: PayloadT) => ({
			type,
			payload
		})
		return acc;
	}, {});
}



type reducerMapT<T, StateT> = {
	[Key in keyof T]: (state: StateT, payload: any) => StateT
}

function createReducerFn<T extends reducerMapT<T, StateT>, StateT>(reducerMap: T, initialState?: StateT) {

	return (state: StateT = initialState as StateT, {type, payload}: {type: keyof T, payload: any}) => {
		const handler = reducerMap[type];
		return handler ? handler(state, payload) : state;
	}
}


// ------------------------------------------------------------------

export function createReducer<T extends reducerMapT<T, StateT>, StateT>(reducerMap: T, initialState?: StateT) {

	return [createActions<T, any>(reducerMap), createReducerFn<T, StateT>(reducerMap, initialState)] as const;
}

