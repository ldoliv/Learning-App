// import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';
import React, {useEffect} from "react";
import {configureStore} from '@reduxjs/toolkit';
import {Provider, useDispatch, useSelector} from 'react-redux';


// ---------------------------
// Use Middleware to Handle Asynchronous Actions
// ---------------------------

// Actions
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

// Action creators
const requestingData = () => {return {type: REQUESTING_DATA}}
const receivedData = (data) => {return {type: RECEIVED_DATA, users: data.users}}


const handleAsync = () => {
	return function(dispatch) {
		// Dispatch request action here
		dispatch(requestingData())

		setTimeout(function() {
			let data = {
				users: ['Jeff', 'William', 'Alice']
			}
			// Dispatch received data action here
			dispatch(receivedData(data))
		}, 2500);
	}
};

// Reducer
const defaultState = {
	fetching: false,
	users: []
};
const asyncDataReducer = (state = defaultState, action) => {
	switch (action.type) {
		case REQUESTING_DATA:
			return { fetching: true, users: [] }
		case RECEIVED_DATA:
			return { fetching: false, users: action.users }
		default:
			return state;
	}
};

// 💰 If your Redux store had more slices or reducers, you would need to specify which part of the state you are interested in.For example, if you had a state structure like this:
// const rootReducer = combineReducers({
// 	asyncData: asyncDataReducer,
// 	anotherSlice: anotherReducer,
// });

// Configure store with thunk middleware
// 💰 It seems @reduxjs/toolkit already comes with thunk middleware
const store = configureStore({
	reducer: asyncDataReducer,
	// reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


// React component
const ReduxComponent = () => {
	const dispatch = useDispatch();
	const {fetching, users} = useSelector((state) => state);
	// const {fetching, users} = useSelector((state) => state.asyncData); // 💰


	// useEffect(() => {
	// 	dispatch(handleAsync());
	// }, [dispatch]);

	function handleClick() {
		dispatch(handleAsync());
	}

	return (
		<div>
			<h1>Redux - Use Middleware to Handle Asynchronous Actions</h1>
			<button className="btn btn-primary" onClick={handleClick}>Get Data</button>
			{fetching ? <p>Loading...</p> : <ul>{users.map((user, index) => <li key={index}>{user}</li>)}</ul>}
		</div>
	);
};

// Main component to provide the store
export default function Redux() {
	return (
		<Provider store={store}>
			<ReduxComponent />
		</Provider>
	);
}