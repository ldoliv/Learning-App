import React from 'react'


type ButtonT = {
	onClick: () => void
}
function Button({onClick}: ButtonT) {

	return (
		<button onClick={onClick}>Increment</button>
	)
}


export default function Counter() {

	const [count, setCount] = React.useState(0);

	function increment() {
		setCount(count + 1)
	}

	return (
		<>
			<div>Count: {count}</div>
			<Button onClick={increment}/>
		</>
	)
}
