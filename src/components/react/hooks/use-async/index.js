import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export default function InversionControl() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/hooks/use-async'} />
	);
}