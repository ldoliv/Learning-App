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

enum Action {
	INCREMENT,
	DECREMENT,
}

type actionT = ReturnType<typeof countActions[keyof typeof countActions]>;

const countActions = {
	increment: (value: number) => {
		return {type: Action.INCREMENT, payload: value}
	},
	decrement: (value: number) => {
		return {type: Action.DECREMENT, payload: value}
	}
}


function countReducer(state: number, action: actionT) {
	switch (action.type) {
		case Action.INCREMENT:
			return state + action.payload
		case Action.DECREMENT:
			return state - action.payload
		default:
			return state
	}
}

const initialState = 0;


export function App() {

	const [count, dispatch] = useReducer(countReducer, initialState);

	function handleClick() {
		dispatch(countActions.increment(1));
	}

	return (
		<>
			<Display value={count} />
			<Command handleClick={handleClick} />
		</>
	)
}