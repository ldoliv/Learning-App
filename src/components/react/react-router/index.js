
/*
	https://reactrouter.com/docs/en/v6/getting-started/tutorial
*/


import {useAddChildren} from 'contexts/RoutesContext';

// import {BrowserRouter, Routes, Route} from 'react-router-dom';

import DefaultLayout, {AlternativeLayout} from './layouts';
import {Expenses, Invoices, NoContent} from './pages';
import Invoice from './components/Invoice';
import './assets/css/style.scss';




function ReactRouterTutorial() {

	useAddChildren([
		{
			path: 'invoices',
			element: <Invoices />,
			children: [
				{
					index: true,
					element: <main style={{padding: "1rem"}}>
						<p>Select an invoice</p>
					</main>
				},
				{
					path: ':invoiceId',
					element: <Invoice />
				}
			]
		},
		{
			path: 'expenses',
			element: <Expenses />
		},
		{
			path: '*',
			element: <NoContent />
		}
	]);


	return (
		<div className="react-router">
			<DefaultLayout />
		</div>
	);
}

export default ReactRouterTutorial;