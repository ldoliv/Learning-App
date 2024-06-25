import {NavLink} from "react-router-dom";


export default function Home({routes}) {
	return (
		<div className="py-4 px-1 px-sm-0">
			<div className="container">
				<nav>
					<ul>
						<li>
							<NavLink to="/learning">Learning</NavLink>
						</li>
						{routes.map(route => <li key={route.baseFolder}>
							<NavLink to={route.baseFolder}>{route.label}</NavLink>
						</li>)}
					</ul>
				</nav>			
			</div>
		</div>
	)
}