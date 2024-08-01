import {useRenderCounter} from 'components/react/hooks/useRenderCounter/UseRenderCounter';
import {sharedCount, sharedUser} from '..';


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

export default CompA