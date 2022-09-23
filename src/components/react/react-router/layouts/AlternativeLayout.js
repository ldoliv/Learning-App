
import {Outlet} from 'react-router-dom';
import Menu from '../components/Menu';

export function AlternativeLayout() {
	return (
		<div className="text-center">
			<h1>Bookkeeper!</h1>
			<Outlet />
			<Menu />
		</div>
	);
}