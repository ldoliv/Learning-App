// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({todo}) => {
	return (
		<li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
			{todo.text}
		</li>
	);
};

export default TodoItem;
