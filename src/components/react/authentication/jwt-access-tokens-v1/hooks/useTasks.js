import {useState, useEffect} from "react";
import {apiMethods} from "../services/api";


export function useTasks(user) {
	const [tasks, setTasks] = useState(null);

	const getTasks = async () => {
		try {
			const tasksResponse = await apiMethods.getTasks();
			setTasks(tasksResponse);
		} catch (error) {
			console.error("Failed to fetch tasks:", error);
		}
	};

	useEffect(() => {
		if (user) {
			getTasks();
		} else {
			setTasks(null);
		}
	}, [user]);

	return {tasks, getTasks};
}
