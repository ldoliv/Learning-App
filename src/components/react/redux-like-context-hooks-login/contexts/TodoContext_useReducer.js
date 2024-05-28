import React, {createContext, useReducer, useContext} from "react";

const TodoContext = createContext();

// Initial state
const initialItems = [
	"Extract todo state to todo context",
	"Implement todo provider"
];

// Actions
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CLEAR_ALL = "CLEAR_ALL";


// Action creators
const todoActions = {
	addTodo: (text) => {
		return {type: ADD_TODO, text};
	},
	removeTodo: (index) => {
		return {type: REMOVE_TODO, index};
	},
	clearAll: () => {
		return {type: CLEAR_ALL};
	},
}

// Reducer
function todoReducer(state, action) {

	switch (action.type) {

		case ADD_TODO:
			return [...state, action.text];

		case REMOVE_TODO:
			const copy = [...state];
			copy.splice(action.index, 1);
			return copy;

		case CLEAR_ALL:
			return [];

		default:
			return state;
	}
}

function TodoProvider(props) {

	const [items, dispatch] = useReducer(todoReducer, initialItems);

	const todoData = {items, dispatch};

	return <TodoContext.Provider value={todoData} {...props} />;
}

function useTodoContext() {
	return useContext(TodoContext);
}

export {TodoProvider, useTodoContext, TodoContext, todoActions};