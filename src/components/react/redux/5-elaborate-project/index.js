import React from "react";
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store";


// Here "store" is passed to the provider

export default function Redux() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}