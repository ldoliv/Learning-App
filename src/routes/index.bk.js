import React, {lazy, Suspense} from 'react';

import {javascriptRoutes} from './javascriptRoutes';
import {w3resourceRoutes} from './w3resourceRoutes';
import {reactRoutes} from './reactRoutes';


import Home from 'pages/home/HomePage';
import NoRouteFound from 'pages/NoRouteFound';
import {getDynamicRoutes} from 'helpers/routes-helper';


const Learning = lazy(() => import(`pages/learning/LearningPage`));



export function getRoutes() {

	const mainRouteObjs = [
		javascriptRoutes,
		w3resourceRoutes,
		reactRoutes
	];

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
		...getDynamicRoutes(mainRouteObjs),
		{
			path: "*",
			element: <NoRouteFound />
		}
	];
} 