import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export function RenderProps() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/patterns/render-props'} />
	);
}