import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function Basics() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/basics'} />
	);
}