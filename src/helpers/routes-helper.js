import {Suspense, lazy} from 'react';
import {ExampleLayout} from 'layouts/ExampleLayout';
import {List} from 'pages/List';


export function getDynamicRoutes(mainRoutes = []) {

	return Promise.all(
		mainRoutes.map(routeObj => {

			return Promise.all(

				// Load routes.js from the subfolders and add them to the object
				// They are then used in the List component
				routeObj.routes.map(route => {
					return import(`components/${routeObj.baseFolder}/${route.componentPath}/routes`)
						.then(module => {
							// console.log(module);
							route.routes = module.routes;
						}).catch(error => {
							// console.log(error);
						})
				})
			)
				.then(result => {
					// console.log(routeObj);

					const dynamicChildRoutes = routeObj.routes.map(route => {
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

					return Promise.resolve({
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
					})

				})

			})
	)
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