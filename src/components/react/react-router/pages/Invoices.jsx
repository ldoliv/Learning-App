
import {NavLink, Outlet, useSearchParams} from 'react-router-dom';
import {getInvoices} from '../data';
import { QueryNavLink } from '../components/QueryNavLink';

export function Invoices() {

	const invoices = getInvoices();
	let [searchParams, setSearchParams] = useSearchParams();

	const filterParam = searchParams.get('filter') || '';

	function handleChange(e) {
		const val = e.target.value;
		setSearchParams(val ? {filter: val} : {});
	}
	
	return (
		<>
			<h2>Invoices</h2>

			<input value={filterParam} onChange={handleChange} />

			<nav className="d-flex justify-content-center">
				{invoices
					.filter(invoice => {
						if (!filterParam) return true;
						return invoice.name.toLowerCase().startsWith(filterParam.toLowerCase());
					})
					.map(invoice => (
						// <NavLink to={`/invoices/${invoice.number}`} key={invoice.number} className="px-3">{invoice.name}</NavLink>
							
						// This component maintains the filter query
						<QueryNavLink to={`${invoice.number}`} key={invoice.number} className="px-3">{invoice.name}</QueryNavLink>
					))}
			</nav>

			<Outlet />
		</>
	)
}