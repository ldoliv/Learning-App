import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export default function Memoization() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/memoization/versions/memo-context'} />
	);
}
