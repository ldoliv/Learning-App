import React from 'react'
import {CountProvider, useCount} from './count-context'
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';

/*
	https://github.com/kentcdodds/old-kentcdodds.com/blob/319db97260078ea4c263e75166f05e2cea21ccd1/content/blog/how-to-optimize-your-context-value/index.md

	This optimization is for when you want to avoid rerendering child components when the component that contains the context provider (MemoContext)
	has it's state updated.
	In other words when it rerenders, even if the child components that consume the context are memoized they will be rerendered because "value" from the
	context provider will always have a new value.
	See ./count-context.js

	The times it's important to optimize your context value is when a certain combination of the following conditions are met:

	Your context value changes frequently
	Your context has many consumers
	You are bothering to use React.memo (because things are legit slow)
	You've actually measured things and you know it's slow and needs to be optimized
*/


function CountDisplay() {
	const {count} = useCount()	// from the context
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
	const {increment} = useCount()	// from the context
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

