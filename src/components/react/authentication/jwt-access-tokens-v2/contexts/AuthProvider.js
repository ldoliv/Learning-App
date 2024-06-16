import React, {createContext, useContext, useReducer, useEffect} from "react"
import {saveUser, getUser, removeUser} from "../services/storage";



// Actions
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SET_ERROR = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';
const UPDATE_TOKEN = 'UPDATE_TOKEN';

// Action types
export const authActions = {
	loginSuccess: (user) => ({type: LOGIN_SUCCESS, payload: user}),
	setError: (error) => ({type: SET_ERROR, payload: error}),
	logout: (error) => ({type: LOGOUT, payload: error}),
	updateAccessToken: (token) => ({type: UPDATE_TOKEN, payload: token})
};

// Reducer
const authReducer = (state, {type, payload}) => {
	switch (type) {
		case LOGIN_SUCCESS:
			return {authenticated: true, user: payload, error: null}
		case SET_ERROR:
			return {...state, error: payload}
		case LOGOUT:
			return {authenticated: false, user: null, error: payload}
		case UPDATE_TOKEN:
			return {authenticated: true, user: {...state.user, accessToken: payload}, error: null}
		default:
			return state
	}
}

const AuthContext = createContext();
const initialState = {
	user: getUser(),
	error: null,
	authenticated: getUser() ? true : false,
}

export function AuthProvider(props) {

	const [auth, dispatch] = useReducer(authReducer, initialState);

	const value = {auth, dispatch};

	// console.log(value);

	// 🥇 deal with side effects here, the so called "middleware"
	useEffect(() => {
		if (auth.authenticated) {
			const {accessToken, ...rest} = auth.user;
			saveUser(rest);
		} else {
			removeUser();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth.authenticated]);
	// ----------------------------------------------------------

	return (
		<AuthContext.Provider {...props} value={value} />
	)
}

export function useAuthContext() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('Must be used within AuthProvider');
	}
	return context;
}