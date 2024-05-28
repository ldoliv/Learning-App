import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export default function Authentication() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/authentication'} />
	);
}