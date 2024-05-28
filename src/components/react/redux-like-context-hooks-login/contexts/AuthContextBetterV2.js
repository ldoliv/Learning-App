import {useReducer, createContext, useContext} from 'react';
import {createReducer} from './redux-helpers';
import {getUser, saveUser, removeUser} from '../components/store';

/*
	https://stackblitz.com/edit/no-more-redux-action-creators-functions-rahul-devsmitra?file=App.tsx,index.tsx,store.ts


	DAR
	Dispatch -> action -> reducer
	Dispatch, dispatches a action function, the reducer receives the current state and the action object and sets the new state.

	dispatch( authActions.loginSuccess(user) );

	Dispatch -> action(payload) -> {type, payload} -> reducer(state, {type, payload})

	Dispatch -> Action : authActions.loginSuccess(user)  				->  Reducer (state, {type, payload})
								{type: 'loginSuccess', payload: user}		    {isLoggedIn: true, user: payload, error: null}



	reduce( authActions.loginSuccess(user) ), the return value from authActions.loginSuccess(user) that is {type: 'loginSuccess', payload: user} is passed, dispached
	to the reducer function initally provided to the useReducer hook, it's passed to the second argument: (state, {type, payload}) => {...}

*/


// STATE REDUCER
// -------------------------------------------------------

/*
	Reducer map object
	-------------------
	💰 Actions, action creators and reducer are all obtained from a reducer map object

	Reducer function signature:
	(state, action) => new state

	Reducer map object functions signature:
	(state, payload) => new state

	Reducer Map object, the action type is fetched from the object keys
*/

const reducerMap = {
	loginSuccess: (state, payload) => {
		saveUser(payload);
		return {isLoggedIn: true, user: payload, error: null};
	},
	loginFail: (state, payload) => {
		return {isLoggedIn: false, user: null, error: payload};
	},
	logout: (state, payload) => {
		removeUser();
		return {isLoggedIn: false};
	}
}

const [authActions, authReducer] = createReducer(reducerMap);

// -------------------------------------------------------


const AuthContext = createContext();
const user = getUser();
// Initial state
const initialState = {
	isLoggedIn: user ? true : false,
	user,
	error: null
};

function AuthProvider(props) {

	const [auth, dispatch] = useReducer(authReducer, initialState);
	const authData = {auth, dispatch};

	// the context provider itself is stateless, so we use useState or useReducer

	return <AuthContext.Provider value={authData} {...props} />

}

function useAuthContext() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuthContext must be used within the AuthProvider');
	}
	return context;
}

export {AuthProvider, useAuthContext, authActions}