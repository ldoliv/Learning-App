import {useState} from 'react';
import calculate from './logic/calculate';
import Display from './component/Display';
import ButtonPanel from './component/ButtonPanel';
import './index.scss';





export function Calculator() {

	const [globalState, setGlobalState] = useState({
		total: null,
		next: null,
		operation: null
	})

	function handleClick(buttonValue) {
		const newState = calculate(globalState, buttonValue);
		console.log('newState: %o', newState);
		console.log('');

		setGlobalState(newState);
	}

	return (
		<div className="calculator">
			<Display value={globalState.next || globalState.total || '0'} />
			<ButtonPanel clickHandler={handleClick} />
		</div>
	)
}

