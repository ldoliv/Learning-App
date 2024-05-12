import React from 'react'
import {CountProvider, useCount, increment} from './context/CountContext';
import Button from './components/Button';
import Count from './components/Count';


// https://hackernoon.com/top-3-coding-challenges-for-mid-level-react-developers

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

