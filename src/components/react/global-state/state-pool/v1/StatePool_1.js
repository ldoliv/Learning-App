import {createState, useState} from 'state-pool';
import Dashboard from './components/Dashboard';
import Display from './components/Display';


export const globalCount = createState(0);


export default function StatePool_1() {

	return (
		<div>
			<Display />
			<Dashboard />
		</div>
	);
}



