import React, {lazy, Suspense} from 'react';

import {javascriptRoutes} from './javascriptRoutes';
import {reactRoutes} from './reactRoutes';
import {typescriptRoutes} from './typescriptRoutes';


import Home from 'pages/home/HomePage';
import NoRouteFound from 'pages/NoRouteFound';
import {getDynamicRoutes} from 'helpers/routes-helper';


const Learning = lazy(() => import(`pages/learning/LearningPage`));

const mainRouteObjs = [
	javascriptRoutes,
	reactRoutes,
	typescriptRoutes
];

export function useRoutes() {

	const [dynRoutes, setDynRoutes] = React.useState([]);

	React.useLayoutEffect(() => {

		getDynamicRoutes(mainRouteObjs)
			.then(dynamicRoutes => {
				setDynRoutes(dynamicRoutes)
			})
	}, [])

	if (!dynRoutes.length)
		return []
	
	return [
		{
			path: "/",
			element: <Home routes={mainRouteObjs} />,
		},
		{
			path: "/learning",
			element: <Suspense fallback={<>Loading...</>}>
				<Learning />
			</Suspense>,
		},
		...dynRoutes,
		{
			path: "*",
			element: <NoRouteFound />
		}
	];
} 