// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, filterFn}) => {
	const filteredTodos = filterFn(todos);

	return (
		<ul>
			{filteredTodos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};

export default TodoList;
