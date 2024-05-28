import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


// https://github.com/yezyilomo/state-pool


export default function StatePool() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/global-state/state-pool'} />
	);
}