import React from 'react'
import {CountProvider, useCountContext, countActions} from './context/CountContext';
import { useRenderCounter } from 'components/react/hooks/useRenderCounter/UseRenderCounter';


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
		dispatch(countActions.increment(2))
		// dispatch(countActions.increment('2'))
		// dispatch({type: 'increments', payload: 2})
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
