// src/App.js
import React, {useState} from 'react';
import TodoList from './components/TodoList';
import {applyFilters} from './utils/filterFunctions';

/*
	Key takeaways:
	1. Control is external, we can pass in as many filter functions as we want, without having to modify the filter function itself
*/

function App() {
	const [todos] = useState([
		{id: 1, text: 'Learn JavaScript', completed: true, highPriority: false},
		{id: 2, text: 'Learn React', completed: false, highPriority: true},
		{id: 3, text: 'Build a Todo App', completed: false, highPriority: true},
	]);

	const completedFilter = (todo) => todo.completed;
	const incompleteFilter = (todo) => !todo.completed;
	const highPriorityFilter = (todo) => todo.highPriority;


	return (
		<div className="App">
			<h1>Todo List</h1>
			<h2>Completed</h2>
			<TodoList todos={todos} filterFn={applyFilters(completedFilter)} />
			<h2>Incomplete</h2>
			<TodoList todos={todos} filterFn={applyFilters(incompleteFilter)} />

			<h2>Complete with high priority</h2>
			<TodoList todos={todos} filterFn={applyFilters(completedFilter, highPriorityFilter)} />
			<h2>Incomplete with high priority</h2>
			<TodoList todos={todos} filterFn={applyFilters(incompleteFilter, highPriorityFilter)} />
		</div>
	);
}

export default App;
