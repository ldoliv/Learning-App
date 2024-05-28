
type ActionFnT<T> = {
	[Key in keyof T]: (payload: any) => {type: Key; payload: any};
};
type ReducerMap<S> = {
	[key: string]: (state: S, payload: any) => S;
};

export function createActions<T extends ReducerMap<any>>(reducerMap: T): ActionFnT<T> {
	return Object.keys(reducerMap).reduce((acc, type) => {
		acc[type as keyof T] = (payload: any) => ({
			type: type as keyof T,
			payload
		});
		return acc;
	}, {} as ActionFnT<T>);
}




type ActionT<T> = {
	type: keyof T;
	payload: any;
};
export function createReducerFn<S>(reducerMap: ReducerMap<S>, initialState?: S) {
	return (state: S = initialState as S, action: ActionT<typeof reducerMap>) => {
		const {type, payload} = action;
		const handler = reducerMap[type];
		return handler ? handler(state, payload) : state;
	};
}
