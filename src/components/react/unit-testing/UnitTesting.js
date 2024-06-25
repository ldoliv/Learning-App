import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function UnitTesting() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/unit-testing'} />
	);
}