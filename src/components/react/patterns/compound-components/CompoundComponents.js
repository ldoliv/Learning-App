
import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function CompoundComponents() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/patterns/compound-components/versions'} />
	);
}
