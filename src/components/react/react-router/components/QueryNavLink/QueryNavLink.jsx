
import { useLocation, NavLink } from "react-router-dom"

export function QueryNavLink({to, ...props}) {

	let location = useLocation();			
	// console.log('location: %o', location.search);	// "?filter=..."

	return (
		<NavLink to={to + location.search} {...props} />
		// <NavLink to={to} {...props} />
	)
}