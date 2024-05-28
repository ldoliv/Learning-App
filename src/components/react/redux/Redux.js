import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export default function Redux() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/redux'} />
	);
}