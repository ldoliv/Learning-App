import React from 'react'
import {CountProvider, useCount} from './count-context'
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';

/*
	This optimization is for when you want to avoid rerendering child components when the component that contains the context provider (MemoContext)
	has it's state updated.
	See ./count-context.js
*/


function CountDisplay() {
	const {count} = useCount()
	const renderCount = useRenderCounter()

	return (
		<div style={{border: '1px solid black', padding: 10}}>
			{renderCount} {`The current count is ${count}. `}
		</div>
	)
}
// eslint-disable-next-line no-func-assign
CountDisplay = React.memo(CountDisplay)


function Counter() {
	const {increment} = useCount()
	const renderCount = useRenderCounter()

	return (
		<div style={{border: '1px solid black', padding: 10}}>
			{renderCount} <button onClick={increment}>Increment count</button>
		</div>
	)
}
// eslint-disable-next-line no-func-assign
Counter = React.memo(Counter)


export default function MemoContext() {
	const [, forceUpdate] = React.useState()
	const renderCount = useRenderCounter()

	return (
		<div style={{border: '1px solid black', padding: 10}}>
			<div className='mb-3'>
				{renderCount} <button onClick={() => forceUpdate({})}>force render</button>
			</div>
			<CountProvider>
				<CountDisplay />
				<Counter />
			</CountProvider>
		</div>
	)
}

