// Control Props
// http://localhost:3000/isolated/exercise/06.js


import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function ControlProps() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/patterns/control-props/versions'} />
	);
}
