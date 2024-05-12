
import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';


export default function Challenges() {

	return (
		<DynamicMenu routes={routes} baseFolder={'react/challenges/hackernoon'} />
	);
}


