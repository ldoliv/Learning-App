import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function GlobalState() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/global-state'} />
	);
}