import ReactDOMServer from 'react-dom/server'
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {useNavUp} from "contexts/RoutesContext";





export function List({routes}) {

	const [navUp] = useNavUp();
	// const navigate = useNavigate();
	const [textSearch, setTextSearch] = useState('');


	function handleTextSearch(e) {
		setTextSearch(e.target.value);
	}


	const resultsFiltered = routes.filter(route => {
		return Object.keys(route).some(prop => {
			// console.log(prop);
			// console.log(route[prop]);
			// console.log(typeof route[prop]);
			// console.log(route[prop].toString());
			// console.log('');

			let value = '';
			// To account for child routes 'route.routes' = []	// dynamic routes attached in routes-helper.js
			if (Array.isArray(route[prop])) {
				if (prop !== 'tags') {
					// console.log(value, prop, route[prop]);
					value = route[prop].map(obj => {
						return Object.keys(obj).map(prop => {
							return typeof obj[prop] === 'object' ? ReactDOMServer.renderToString(obj[prop]) : obj[prop].toString()
						}).join(' ')
					}).join(' ')
					// console.log(value, `prop: ${prop}`, route[prop]);
				}
			} else if (typeof route[prop] === 'object') {
				value = ReactDOMServer.renderToString(route[prop])
			} else {
				value = route[prop].toString()
			}

			// const value = typeof route[prop] === 'object' ? ReactDOMServer.renderToString(route[prop]) : route[prop].toString();
			return value && value.toLowerCase().includes(textSearch.toLowerCase())
		});
	})

	return (
		<div className="questions py-4 px-1 px-sm-0">
			<div className="container">
				<div className="btn btn-outline-secondary mb-5" onClick={navUp}>Back</div>
				<div className="search-ct mb-4">
					<input className="form-control w-100" type="text" value={textSearch} onChange={handleTextSearch} placeholder="Search..." />
				</div>
				<nav>
					<ol>
						{resultsFiltered.map(route => {

							const descHtml = ReactDOMServer.renderToString(route.desc);

							return (
								<li key={route.path}>
									{route.desc && <div className="list-desc" dangerouslySetInnerHTML={{__html: descHtml}} />}
									{route.output && <div className="list-output">{route.output}</div>}
									<ul>
										{route.routes?.slice(0, 100).map((childRoute, index) => {
											// console.log(childRoute);
											const childLabelHtml = ReactDOMServer.renderToString(childRoute.label);
											return <li key={index} dangerouslySetInnerHTML={{__html: childLabelHtml}}></li>
										})}
										{route.routes?.length > 100 ? <li>...</li> : null}
									</ul>
									{route.tags.length > 0 && <div className="list-tags mb-3">Tags: {route.tags.join(', ')}</div>}
									<NavLink to={route.path}>Solution</NavLink>
								</li>
							);
						}
						)}
						{!resultsFiltered.length && <div>No Results!</div>}
					</ol>
				</nav>
			</div>
		</div>
	)
}