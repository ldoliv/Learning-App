import React from "react";
import {configureStore} from '@reduxjs/toolkit';
// import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';

// ---------------------------
// BASICS
// ---------------------------

// Actions
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'


// Action creators
const loginUser = () => {
	return {type: LOGIN}
};
const logoutUser = () => {
	return {type: LOGOUT}
};

// Reducer
const defaultState = {
	authenticated: false
};
const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case LOGIN:
			return {authenticated: true}
		case LOGOUT:
			return {authenticated: false}
		default:
			return state;
	}
};

const store = configureStore({
	reducer: authReducer,
});


// Subscribe to a listener function that gets called whenever an action is dispatched
// ---------------------------------

let count = 0;
function incrementCount() {
	count += 1
} 

// pass a callback function
store.subscribe(incrementCount)

console.log(count);
store.dispatch(loginUser())

console.log(count);
store.dispatch(logoutUser())
console.log(count);

// ---------------------------------

console.log(store.getState());



export default function Redux() {
	return (
		<div>Redux - Basics</div>
	)
}