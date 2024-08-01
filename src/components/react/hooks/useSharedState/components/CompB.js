import {useRenderCounter} from 'components/react/hooks/useRenderCounter/UseRenderCounter';
import {sharedCount, sharedUser} from '..';

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

export default CompB