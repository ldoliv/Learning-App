import {useState} from 'react';


function useToggle() {
	const [on, setOnState] = useState(false);

	const toggle = () => setOnState(o => !o);
	const setOn = () => setOnState(true);
	const setOff = () => setOnState(false);

	return {on, toggle, setOn, setOff};
}


export function ToggleSimple() {

	const {on, toggle, setOn, setOff} = useToggle();

	return (
		<>
			<div className="row justify-content-center align-items-center">
				<div className="col-auto">
					<button className="btn btn-outline-secondary" onClick={setOn}>On</button>
				</div>
				<div className="col-auto">
					<div className="form-check form-switch">
						<input className="form-check-input" type="checkbox" role="switch" checked={on} onChange={toggle} />
					</div>
				</div>
				<div className="col-auto">
					<button className="btn btn-outline-secondary" onClick={setOff}>Off</button>
				</div>
			</div>
		</>
	)
}