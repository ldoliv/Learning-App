import React, {useState} from "react";
import {
	useTodoContext,
	todoActions
} from "../contexts/TodoContext_useReducer";


export function NewItem() {

	const [text, setText] = useState("");
	// Get the dispatcher from TodoContext
	const {dispatch} = useTodoContext();

	// Dispatch addTodo action when adding a new item
	return (
		<div className="Item">
			<input
				type="text"
				placeholder="New Task"
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<button onClick={() => dispatch(todoActions.addTodo(text))}>Add</button>
		</div>
	);
}

export function ItemList() {

	const {items, dispatch} = useTodoContext();

	return (
		<>
			{items.map((item, i) => (
				<Item text={item} index={i} key={i} dispatch={dispatch} />
			))}
			{items.length > 0 && (
				<p
					style={{fontSize: "15px", cursor: "pointer"}}
					onClick={() => dispatch(todoActions.clearAll())}
				>
					Clear All
				</p>
			)}
		</>
	);
}

export function Item({text, index, dispatch}) {
	return (
		<div className="Item">
			{index + 1} {text}
			<span onClick={() => dispatch(todoActions.removeTodo(index))}>Done</span>
		</div>
	);
}