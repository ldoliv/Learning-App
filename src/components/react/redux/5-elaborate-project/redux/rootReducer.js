import {combineReducers} from "redux";
import taskReducer from "./tasks/taskReducer";

// Only 1 but there could be multiple
const rootReducer = combineReducers({
	task: taskReducer
});

export default rootReducer