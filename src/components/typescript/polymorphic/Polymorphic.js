import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';



export function Polymorphic() {

	return (
		<DynamicMenu routes={routes} baseFolder={'typescript/polymorphic'} />
	);
}