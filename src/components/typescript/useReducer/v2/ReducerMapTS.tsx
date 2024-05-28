import React, {useReducer} from "react"
// import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';


type DisplayPropsT = {
	value: number
}
function Display(props: DisplayPropsT) {
	return (
		<div>The value is: {props.value}</div>
	)
}


type CommandPropsT = {
	handleClick: () => void
}
function Command(props: CommandPropsT) {
	return (
		<button className="btn btn-primary" onClick={props.handleClick}>Click me</button>
	)
}

// --------------------------------------------------------

const initialState = 0;
type stateT = number;


const reducerMap = {
	increment: (state: stateT, payload: number) => {
		return state + payload
	},
	add: (state: stateT, payload: number[]) => {
		const result = payload.reduce((num, acc) => num + acc, 0)
		return state + result
	}
}

type ReducerMapT = typeof reducerMap;
type ActionT = {
	type: keyof ReducerMapT;
	payload: any
};

function createReducerFn(reducerMap: ReducerMapT) {
	return (state: stateT, action: ActionT) => {
		const {type, payload} = action;
		const handler = reducerMap[type];
		return handler ? handler(state, payload) : state;
	}
}

const countReducer = createReducerFn(reducerMap);

// ------------------------------------------------



type ActionCreators2 = {
	[key: string]: (payload: any) => ({type: string, payload: any})
}

export function createActions2(reducerMap: ReducerMapT): ActionCreators2 {
	return Object.keys(reducerMap).reduce((acc, type) => {
		acc[type] = (payload: any) => ({
			type,
			payload
		})
		return acc;
	}, {} as ActionCreators2);
}

export const countActions = createActions2(reducerMap);
// var a = countActions



export function App() {

	const [count, dispatch] = useReducer(countReducer, initialState);

	function handleClick() {
		// dispatch(countActions.add([1, 2]));
		dispatch({type: 'add', payload: [1, 2]});
	}

	return (
		<>
			<Display value={count} />
			<Command handleClick={handleClick} />
		</>
	)
}