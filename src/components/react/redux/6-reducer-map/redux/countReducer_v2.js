import {createActions, createReducer, createReducerTuple} from './helpers';


// We can pass the initial state to configureStore
export const initialState = {
	count: 0
};

const reducerMap = {
	increment: (state, payload = 1) => {
		return {count: state.count + payload}
	},
	decrement: (state, payload = 1) => {
		return {count: state.count - payload}
	}
}



// Option 1, initial state is passed to configureStore when creating the store
export const [countActions, countReducer] = createReducerTuple(reducerMap);


// Option 2, passing initial state here
// export const [countActions, countReducer] = createReducerTuple(reducerMap, initialState);
