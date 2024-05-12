import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function Patterns() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/patterns'} />
	);
}