import React from "react";
import {createReducer} from '../utils/redux-utils';

type PayloadT = number;

type actionT<Key, PayloadT> = {
	type: Key,
	payload: PayloadT
}

type contextT = {
	count: PayloadT,
	dispatch: React.Dispatch<actionT<actionKeys, PayloadT>>
} | null

const counterContext = React.createContext<contextT>(null);



// --------------------------------
const initialState = {
	count: 0
}
type stateT = typeof initialState;
// --------------------------------


const reducerMap = {
	increment: (state: stateT, payload: PayloadT) => {
		return {count: state.count + payload}
	},
	decrement: (state: stateT, payload: PayloadT) => {
		return {count: state.count > 0 ? state.count - payload : 0}
	}
}

type reducerMapT = typeof reducerMap
type actionKeys = keyof reducerMapT


const [countActions, countReducer] = createReducer<reducerMapT, stateT>(reducerMap);

// countActions.

// ----------------------------------------------

type ICounterProvider = {
	children: React.ReactNode
}

function CountProvider({children}: ICounterProvider) {

	const [state, dispatch] = React.useReducer(countReducer, initialState);
	
	const {count} = state;
	const value = {count, dispatch};
		
	return (
		<counterContext.Provider value={value}>
			{children}
		</counterContext.Provider>
	)
}

function useCount() {
	const context = React.useContext(counterContext);
	if (!context) {
		throw new Error('useCount must be used within a CountProvider')
	}
	return context;
}


export {CountProvider, countActions, useCount}