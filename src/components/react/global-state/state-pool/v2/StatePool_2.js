import {createStore, createState, useState} from 'state-pool';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

// Option 1
// export const store = createStore();
// store.setState('count', 0);
// store.setState('user', {
// 	name: 'John',
// 	email: 'john@something.com'
// });

// Option 2
export const store = createStore({
	count: 0,
	user: {
		name: 'John',
		email: 'john@something.com'
	}
});



export default function StatePool_2() {

	return (
		<div>
			<Display className='mb-4' />
			<Dashboard />
		</div>
	);
}



