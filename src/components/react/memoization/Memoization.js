import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function Memoization() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/memoization'} />
	);
}
