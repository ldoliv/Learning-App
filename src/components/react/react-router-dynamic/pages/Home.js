import {NavLink} from "react-router-dom";
import {dynamicRoutes} from '../config';


export default function Home() {
	return (
		<nav>
			<ul>
				{dynamicRoutes.map(route => <li key={route.path}>
					<NavLink to={route.path}>{route.label}</NavLink>
				</li>)}
				{/* <NavLink to="/current">Current</NavLink> */}
			</ul>
		</nav>
	)
}