import {DynamicMenu} from 'components/global/DynamicMenu';
import {routes} from './routes';
import Auth0 from './auth0/Auth0';


export function Authentication() {

	return (
		<>
			<DynamicMenu routes={routes} baseFolder={'react/authentication'} />
			<Auth0 />
		</>
	);
}