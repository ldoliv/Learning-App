
import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export default function ReactVirtual() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/performance/react-virtual'} />
	);
}
