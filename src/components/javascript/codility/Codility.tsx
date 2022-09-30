
import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function Codility() {

	return (
		<DynamicMenu routes={routes} baseFolder={'javascript/codility/challenges'} />
	);
}


