
import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function Contexts() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/contexts/versions'} />
	);
}


