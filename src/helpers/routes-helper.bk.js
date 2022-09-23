import {Suspense, lazy} from 'react';
import {ExampleLayout} from 'layouts/ExampleLayout';
import {List} from 'pages/List';


export function getDynamicRoutes(mainRoutes = []) {

	return mainRoutes.map(routeObj => {

		// const promises = routeObj.routes.map(route => {
		// 	return import(`components/${routeObj.baseFolder}/${route.componentPath}/routes`)
		// 		.then(module => {
		// 			// console.log(module);
		// 			// console.log(module.routes);
		// 			// route.routes = module.routes;
		// 			return Promise.resolve(route);
		// 		}).catch(error => {
		// 			// console.log(error);
		// 			// route.routes = [];
		// 			// return Promise.reject(route);
		// 		})
		// });

		// Promise.all(promises)
		// 	.then(result => {
		// 		console.log('result: %o', result);
		// 	})
		// 	.catch(err => {
		// 		console.log('error: %o', err);
		// })


		const dynamicChildRoutes = routeObj.routes.map(route => {
			// Dynamicall load routes !!!!!
			const Component = lazy(() => import(`components/${routeObj.baseFolder}/${route.componentPath}`));

			return {
				path: route.path,
				element: (
					<ExampleLayout>
						<Suspense fallback={<>Loading...</>}>
							<Component />
						</Suspense>
					</ExampleLayout>
				),
			}
		});

		return {
			path: `/${routeObj.baseFolder}`,
			children: [
				{
					// Represents the main route, ex: /javascript, /react
					index: true,
					element: <List routes={routeObj.routes} />
				},
				// represents child routes, ex: /react/autocompletion
				...dynamicChildRoutes,
			],
		}

	})
}


// Dynamically load routes !!!!!
export function generateDynamicRoutes({routes = [], baseFolder = ''}) {

	const dRoutes = routes.map(route => {
		const Component = lazy(() => import(`components/${baseFolder}/${route.componentFilename}`));

		return {
			path: route.path,
			element: (
				<Suspense fallback={<>Loading...</>}>
					<Component />
				</Suspense>
			),
		}
	})
	return dRoutes;
}