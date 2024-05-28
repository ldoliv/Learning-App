import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTask, updateTaskDescription, updateTaskTitle} from "./redux/tasks/taskActions";

// https://dev.to/thisurathenuka/add-redux-to-your-react-app-in-6-simple-steps-43bb

/*
	If we wanted, the 3 files in redux/tasks could be combined into a single file by using a reducer map object
*/

const styles = {
	taskContainer: {
		display: "flex",
		flexDirection: "column",
		width: "350px"
	},
	mainContainer: {
		textAlign: '-webkit-center'
	}
}

export default function AddTasks() {

	const dispatch = useDispatch();

	// Here we get specific properties from the state
	const taskTitle = useSelector(state => state.task.taskTitle)
	const taskDescription = useSelector(state => state.task.taskDescription)
	const tasks = useSelector(state => state.task.tasks)

	// Here is for dispatching actions to update the state
	const onAddTask = () => {
		dispatch(addTask({
			title: taskTitle,
			description: taskDescription,
		}))
	};
	const onTaskTitleChange = (e) => dispatch(updateTaskTitle(e.target.value))
	const onTaskDescriptionChange = (e) => dispatch(updateTaskDescription(e.target.value))

	return (
		<div style={styles.mainContainer}>
			<div style={styles.taskContainer}>
				<input type="text" placeholder="Task Title" onChange={onTaskTitleChange} value={taskTitle} />
				<input type="text" placeholder="Task Description" onChange={onTaskDescriptionChange} value={taskDescription} />
				<button onClick={onAddTask}>Add Task</button>
				<div style={{marginTop: '30px'}}>
					<h2>Task List:</h2>
					<div>{tasks.map((task, idx) => <div style={{borderBottom: '1px solid #999', padding: '20px 0'}} key={idx}>
						<h4>{task.title}</h4>
						<p>{task.description}</p>
					</div>)}</div>
				</div>
			</div>
		</div>
	);
}
