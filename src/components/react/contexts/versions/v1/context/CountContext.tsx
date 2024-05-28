import React from "react";


enum Action {
	increment = 'increment',
	decrement = 'decrement'
} 

type contextT = {
	count: number,
	dispatch: React.Dispatch<actionsT>
} | null

const counterContext = React.createContext<contextT>(null);


type actionsT = {
	type: keyof typeof Action,
	payload: number
}

const initialState = {
	count: 0
}
type initialStateT = typeof initialState;



function countReducer(state: initialStateT, action: actionsT) {
	
	switch (action.type) {
		case Action.increment:
			return {count: state.count + action.payload}
		case Action.decrement:
			return {count: state.count > 0 ? state.count - action.payload : 0}
		default:
			throw new Error('Unhandled action type')
	}
}

// Action creators | this is swaped around from what I've seen before normally it's dispatch(increment) and not increment(dispatch)
const increment = (dispatch: React.Dispatch<actionsT>) => dispatch({type: Action.increment, payload: 1})
const decrement = (dispatch: React.Dispatch<actionsT>) => dispatch({type: Action.decrement, payload: 1})


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


export {CountProvider, increment, decrement, useCount}