
import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function Challenges() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/challenges'} />
	);
}


