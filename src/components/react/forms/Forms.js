import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function Forms() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/forms'} />
	);
}