import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export default function StateReducer() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/patterns/state-reducer'} />
	);
}