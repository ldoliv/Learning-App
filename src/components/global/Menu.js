import {NavLink} from "react-router-dom";

export function Menu({routes}) {
	return (
		<>
			<nav>
				<ul>
					{routes.map(route => <li key={route.path}>
						<NavLink to={route.path}>{route.label}</NavLink>
					</li>)}
					{/* <NavLink to="/current">Current</NavLink> */}
				</ul>
			</nav>
		</>
	)
}