import {NavLink} from "react-router-dom";

export function Menu({routes}) {
	return (
		<>
			<nav>
				<ul>
					{routes.map((route, idx) => <li className={`${route.path}_${idx}`} key={`${route.path}_${idx}`}>
						<NavLink to={route.path}>{route.label}</NavLink>
					</li>)}
					{/* <NavLink to="/current">Current</NavLink> */}
				</ul>
			</nav>
		</>
	)
}