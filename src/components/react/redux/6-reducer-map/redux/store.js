import {configureStore} from '@reduxjs/toolkit';
import {countReducer} from './countReducer_v1';
import {countReducer as countReducer2, initialState} from './countReducer_v2';

export const store = configureStore({
	// reducer: countReducer
	reducer: countReducer2,
	preloadedState: initialState,	// we can pass the initial state here
});
