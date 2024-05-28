import React from 'react';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import App from './App';

// https://hackernoon.com/top-3-coding-challenges-for-expert-level-react-developers

export default function Redux() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}
