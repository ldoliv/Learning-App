
import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function Performance() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/performance'} />
	);
}
