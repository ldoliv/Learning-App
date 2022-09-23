import {NavLink} from 'react-router-dom';


export function Menu() {
	return (
		<nav style={{
			borderBottom: "solid 1px",
			paddingBottom: "1rem"
		}}>
			<NavLink to="invoices" className={({isActive}) => isActive ? 'special-active' : ''}>Invoices</NavLink> |{" "}
			<NavLink to="expenses" className={({isActive}) => isActive ? 'special-active' : ''}>Expenses</NavLink>
		</nav>
	)
}