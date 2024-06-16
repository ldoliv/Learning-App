import React from "react";
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';
import {createSharedState} from "./useSharedState";


// Hook that can be usefull to share state between siblings


// 💰
const sharedCount = createSharedState(10);
// const sharedUser = createSharedState({
// 	name: 'John'
// });
const sharedUser = createSharedState('John');


function CompA() {
	const renderCount = useRenderCounter(0);
	const [count, setCount] = sharedCount.useState();
	const [user, setUser] = sharedUser.useState();

	return (
		<div className="mb-4">
			{renderCount} <h3 onClick={() => setCount(count + 1)}>Component A: {count}</h3>
			<div>User: {user} <button className='btn btn-light' onClick={() => setUser('Ana')}>Update user</button></div>
		</div>
	)
}
// CompA = React.memo(CompA)

function CompB() {
	const renderCount = useRenderCounter(0);
	const [count, setCount] = sharedCount.useState();
	const [user, setUser] = sharedUser.useState();


	return (
		<div className="mb-4">
			{renderCount} <h3 onClick={() => setCount(count + 1)}>Click me, Component B: {count}</h3>
			<div>User: {user} <button className='btn btn-light' onClick={() => setUser('Leo')}>Update user</button></div>
		</div>
	)
}
// CompB = React.memo(CompB)



export default function App() {
	return (
		<>
			<CompA />
			<CompB />
		</>
	)
}
