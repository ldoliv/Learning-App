
import {Outlet} from 'react-router-dom';
import Menu from '../components/Menu';

export function DefaultLayout() {
	return (
		<div className="text-center">
			<h1>Bookkeeper!</h1>
			<Menu />
			<main className="py-4">
				<Outlet />
			</main>
		</div>
	);
}