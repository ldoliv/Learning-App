import React from 'react'
import {CountProvider, useCountState, useCountUpdater} from './count-context'
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';

/*
	https://github.com/kentcdodds/old-kentcdodds.com/blob/319db97260078ea4c263e75166f05e2cea21ccd1/content/blog/how-to-optimize-your-context-value/index.md

	This version we split the context into 2 providers, one just for consuming and one for updating
*/


function CountDisplay() {
	const {count} = useCountState()
	const renderCount = useRenderCounter()

	return (
		<div style={{border: '1px solid black', padding: 10}}>
			{renderCount} {`The current count is ${count}. `}
		</div>
	)
}
CountDisplay = React.memo(CountDisplay);


function Counter() {
	const increment = useCountUpdater()
	const renderCount = useRenderCounter()

	return (
		<div style={{border: '1px solid black', padding: 10}}>
			{renderCount} <button onClick={increment}>Increment count</button>
		</div>
	)
}
Counter = React.memo(Counter);



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

