import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function Authentication() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/authentication'} />
	);
}