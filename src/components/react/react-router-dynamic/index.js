import {Outlet} from 'react-router-dom';
import {useAddChildren} from 'contexts/RoutesContext';

import React, {lazy, Suspense} from 'react';
import {dynamicRoutes} from './config';
import Home from './pages/Home';



// Dynamicall load routes !!!!!
const dRoutes = dynamicRoutes.map(route => {
	const Component = lazy(() => import(`./components/${route.componentFilename}`));

	return {
		path: route.path,
		element: (
			<Suspense fallback={<>Loading...</>}>
				<Component />
			</Suspense>
		),
	}
})

const children = [
	{
		index: true,
		element: <Home />
	},
	...dRoutes
];



function DynamicReactRouter() {

	useAddChildren(children);

	return (
		<Outlet />
	);
}

export default DynamicReactRouter;