import React, {useReducer} from "react";
import Display from "../components/Display";
import Command from "../components/Command";
import {createActions, createReducerFn} from "./reducer-map";



type StateT = number;

const reducerMap = {
	increment: (state: StateT, payload: number) => {
		return state + payload;
	},
	add: (state: StateT, payload: number[]) => {
		const result = payload.reduce((acc, num) => acc + num, 0);
		return state + result;
	}
};


const countActions = createActions(reducerMap);
const countReducer = createReducerFn(reducerMap);

// countActions.



const initialState = 0;

export function App() {
	const [count, dispatch] = useReducer(countReducer, initialState);

	function handleClick() {
		dispatch(countActions.add([1, 2]));
	}

	return (
		<>
			<Display value={count} />
			<Command handleClick={handleClick} />
		</>
	);
}
