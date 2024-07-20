import React from 'react'
import {CountProvider, useCountContext, increment} from './context/CountContext';
import { useRenderCounter } from 'components/react/hooks/use-render-counter/UseRenderCounter';


function Count() {

	const RenderCount = useRenderCounter();
	const {count} = useCountContext();
	
	return (
		<div className='mb-2'>{RenderCount} Count: {count}</div>
	)
}


function Button() {

	const RenderCount = useRenderCounter();
	const {dispatch} = useCountContext();

	function handleClick() {
		increment(dispatch)
	}

	return (
		<>
			{RenderCount}
			<button onClick={handleClick}>Increment</button>
		</>
	)
}



export default function Counter() {

	const [, update] = React.useState({});
	const RenderCount = useRenderCounter();
	
	return (
		<>
			<div className='mb-3'>{RenderCount} Parent
				<button className='ms-3' onClick={() => update({})}>Force Update</button>
			</div>
			
			<CountProvider>
				<Count />
				<Button />
			</CountProvider>
		</>
	)
}
