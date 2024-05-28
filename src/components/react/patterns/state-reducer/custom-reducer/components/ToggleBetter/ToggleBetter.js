import {useState} from 'react';
import {useToggle, actionTypes, runReducers, mergeReducers} from './components/UseToggle';


/*
	https://codesandbox.io/s/simply-react-accordion-lvg59

	Takeaways:
	1. A custom reducer is passed to the custom hook, giving you control over the state
*/



export function ToggleBetter() {

	const [clickCount, setClickCount] = useState(0);
	const tooManyClicks = clickCount >= 4;


	console.log(clickCount);

	const toggleStuckOn4 = (state, action) => {
		// only return for the specific case, don't return state otherwise for it to work properly with run Reducers
		if (tooManyClicks && action.type === actionTypes.toggle) {
			return {...state, on: state.on}	// maintain the on state that it was, on or off
		}
	}

	const allStuckOn2 = (state, action) => {
		// only return for the specific case, don't return state otherwise for it to work properly with run Reducers
		if (clickCount > 2) {
			return {...state, on: state.on}	// maintain the on state that it was, on or off
		}
	}


	const {on, toggle, setOn, setOff} = useToggle({
		// reducer: runReducers(stuckOn4),
		// reducer: mergeReducers(toggleStuckOn4, allStuckOn2)
		reducer: mergeReducers(allStuckOn2, toggleStuckOn4)
		// reducer: stuckOn4
	});


	function handleClicks() {
		toggle();
		setClickCount(c => c + 1);
	}

	function handleResetClicks() {
		setClickCount(0);
	}


	return (
		<>
			<div className="row justify-content-center align-items-center">
				<div className="col-auto">
					<button className="btn btn-outline-secondary" onClick={setOn}>On</button>
				</div>
				<div className="col-auto">
					<div className="form-check form-switch">
						<input className="form-check-input" type="checkbox" role="switch" checked={on} onChange={handleClicks} />
					</div>
				</div>
				<div className="col-auto">
					<button className="btn btn-outline-secondary" onClick={setOff}>Off</button>
				</div>
			</div>
			{tooManyClicks && <button onClick={handleResetClicks}>Reset</button>}
		</>
	)
}