import React, {ReactEventHandler} from 'react'
import ListItem from './ListItem'
import TextInput from './TextInput'

function List() {

	console.log('rendered list');

	const [items, setItems] = React.useState<string[]>([])

	function addItem(item: string) {
		setItems([...items, item])
	}

	// function deleteItem(text: string) {
	// 	return () => {
	// 		setItems(items.filter(item => item !== text))
	// 	}
	// }

	function deleteItem(index: number) {
		return () => {
			// const itemsCpy = items.slice();
			// itemsCpy.splice(index, 1)
			// setItems(itemsCpy)

			setItems(items.filter((item, idx) => idx !== index))
		}
	}

	return (
		<div>
			<TextInput onClick={addItem} />
			<div>{items.map((item, index) =>
				<ListItem key={index} text={item} onClick={deleteItem(index)} />)}
			</div>
	  </div>
  )
}


export {List as default}