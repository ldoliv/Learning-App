import React from 'react'
import {CountProvider, useCount, increment} from './context/CountContext';
import Button from './components/Button';
import Count from './components/Count';




export default function Counter() {
	
	return (
		<>
			<CountProvider>
				<Count />
				<Button />
			</CountProvider>
		</>
	)
}

