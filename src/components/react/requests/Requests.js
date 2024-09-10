import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export default function Requests() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/requests'} />
	);
}