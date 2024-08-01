import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function Hooks() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/hooks'} />
	);
}