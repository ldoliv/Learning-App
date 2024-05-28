
export default function Dashboard({onInc, onDec}) {
	
	return (
		<div>
			<button onClick={onInc}>Increment</button>
			<button onClick={onDec}>Decrement</button>
		</div>
	)
}
