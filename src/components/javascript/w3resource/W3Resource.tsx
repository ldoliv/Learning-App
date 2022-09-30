
import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function W3Resource() {

	return (
		<DynamicMenu routes={routes} baseFolder={'javascript/w3resource/challenges'} />
	);
}


