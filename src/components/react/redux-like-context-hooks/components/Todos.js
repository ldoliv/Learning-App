import {NewItem, ItemList} from "./Items_useReducer";
import {TodoContext} from "../contexts/TodoContext_useReducer";

export default function Todo() {

	return (
		<div className="App">
			<header className="App-header">
				<h2>🚀 ToDo App</h2>
				<NewItem />
				<ItemList />
				<TodoContext.Consumer>
					{value => {
						console.log(value);
					}}
				</TodoContext.Consumer>
			</header>
		</div>
	);
}