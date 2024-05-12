import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function Hocs() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/patterns/hocs'} />
	);
}