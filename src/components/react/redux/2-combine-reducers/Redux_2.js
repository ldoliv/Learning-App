import React from "react";
import {configureStore, combineReducers} from '@reduxjs/toolkit';
// import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';


// ---------------------------
// COMBINE REDUCERS
// ---------------------------


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterActions = {
	increment: () => {
		return {type: INCREMENT}
	},
	decrement: () => {
		return {type: DECREMENT}
	}
}

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		default:
			return state;
	}
};

// -----------------------------------------------------

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authActions = {
	login: () => {
		return {type: LOGIN}
	},
	logout: () => {
		return {type: LOGOUT}
	}
}

const authReducer = (state = {authenticated: false}, action) => {
	switch (action.type) {
		case LOGIN:
			return {authenticated: true}
		case LOGOUT:
			return {authenticated: false}
		default:
			return state;
	}
};

// Combine reducers
const rootReducer = combineReducers({
	count: counterReducer,
	auth: authReducer
})

const store = configureStore({
	reducer: rootReducer,
});

console.log(store.getState());
store.dispatch(counterActions.increment())
console.log(store.getState());
store.dispatch(authActions.login())
console.log(store.getState());



export default function Redux() {
	return (
		<div>Redux - Combine Multiple Reducers</div>
	)
}