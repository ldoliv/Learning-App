


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




// Reducer
type reducerMapT<T, PayloadT> = {
	[Key in keyof T]: (state: any, payload: PayloadT) => any
}

function reducer<T extends reducerMapT<T, PayloadT>, PayloadT>(reducerMap: T) {

	return (state: any, {type, payload}: {type: keyof T, payload: PayloadT}) => {
		const handler = reducerMap[type];
		return handler ? handler(state, payload) : state;
	}
}


// ------------------------------------------------------------------

export function createReducer<T extends reducerMapT<T, PayloadT>, PayloadT>(reducerMap: T) {

	return [createActions<T, PayloadT>(reducerMap), reducer<T, PayloadT>(reducerMap)] as const;
}

