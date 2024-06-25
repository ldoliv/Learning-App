import React from 'react';
import {createContext, useContext, useEffect} from 'react';
import {useRoutes, useLocation, useNavigate} from "react-router-dom";
import {createActions, useReducerMap} from '../helpers/redux-helpers';
import {cloneDeep} from 'lodash/fp';

/*
	https://stackblitz.com/edit/no-more-redux-action-creators-functions-rahul-devsmitra?file=App.tsx,index.tsx,store.ts


	Dispatch -> action -> reducer
	Dispatch, dispatches a action function, the reducer receives the current state and the action object and sets the new state.

	dispatch(authActions.loginSuccess(user));
	Dispatch -> action(payload) -> {type, payload} -> reducer(state, {type, payload})

	Dispatch -> Action : authActions.loginSuccess(user)  				->  Reducer (state, {type, payload})
								 {type: 'loginSuccess', payload: user}		      {isLoggedIn: true, user: payload, error: null}
*/


const RouterContext = createContext();


export function findRoute(path, routes) {

	// console.log(routes);

	function getRoute(route) {

		// if (route.path && (route.path === `/${path}` || route.path === path)) {
		if (route.path && (route.path === `/${path}` || route.path.includes(path))) {
			return route;
		}

		if (route.children && route.children.length) {

			for (let i = 0; i < route.children.length; i++) {
				const childRoute = route.children[i];

				const foundRoute = getRoute(childRoute);
				if (foundRoute) {
					return foundRoute;
				}
			}
		}
	}

	for (let i = 0; i < routes.length; i++) {
		const route = routes[i];
		let found = getRoute(route);
		if (found) {
			return found;
		}
	}

	return null;
}


/* to be used in components to add children routes */

export function useAddChildren(children) {

	const {pathname} = useLocation();
	const {dispatch} = useRouterContext();

	React.useLayoutEffect(() => {
		const path = pathname.split('/').pop();
		dispatch(routerActions.addChildren({path, children}))
		return () => {}
	}, [])
}


export function useNavUp({setFrom} = {setFrom: false}) {

	const navigate = useNavigate();
	const location = useLocation();
	const {routes} = useRouterContext();

	// console.log(location);


	function navUp() {

		const pathParts = location.pathname.split('/').filter(path => path !== '').slice(0, -1);

		if (!pathParts.length) {
			navigate('/');

		} else {

			let foundRoute = null;
			let last = '';

			do {
				last = pathParts.pop();
				foundRoute = findRoute(last, routes);
				// console.log('searching for: %o', last);
			} while (!foundRoute && pathParts.length)


			const path = `${pathParts.length ? '/' + pathParts.join('/') : ''}/${last}`;
			// console.log('current: %o, go to: %o', location.pathname, path);

			let prevPaths = [];
			if (setFrom) {
				/*
					Build an array of paths to go to
				*/
				// current: '/react/patterns/compound-components/something/v1'
				// found path: '/react/patterns/compound-components'
				// pathBefore[0]: '/react/patterns/compound-components/something'
				// pathBefore[1]: '/react/patterns/compound-components/something/v1'
				const levels = location.pathname.replace(path, '').split('/').filter(path => path.length);
				if (levels.length) {
					let lastPath = path;
					prevPaths = levels.map(level => {
						lastPath += '/' + level;
						return lastPath;
					})
				}
			}

			// console.log('prevPaths: %o', prevPaths);

			// Only use setFrom = true in NoRouteFound
			navigate(path, {replace: true, state: {before: prevPaths}});
		}

	}

	return [navUp];
}



// Reducer signature:
// (state, action) => new state

// Reducer Map that sets the new state depending on the action that is dispatched
// Maps type of action to new state
const reducerMap = {
	addChildren: (state, {path, children}) => {

		// console.log(state, path, children);
		const foundRoute = findRoute(path, state);
		// console.log(foundRoute);
		if (foundRoute && !foundRoute?.children?.length) {
			const stateCpy = cloneDeep(state);
			const foundRouteCpy = findRoute(path, stateCpy);
			foundRouteCpy.children = children;
			// console.log('added: %o', stateCpy);
			return stateCpy;
		}
		return state;
	},
	removeChildren: (state, {path}) => {

		const foundRoute = findRoute(path, state);
		if (foundRoute && foundRoute?.children?.length) {
			const stateCpy = cloneDeep(state);
			const foundRoute = findRoute(path, stateCpy);
			delete foundRoute.children;
			// console.log('removed: %o', stateCpy);
			return stateCpy;
		}
		return state;
	}
}

export const routerActions = createActions(reducerMap);



// -----------------------------------------------------------------------------

export function RouterProvider({routes, ...rest}) {

	// console.log('RouterProvider rendered');

	const location = useLocation();
	const navigate = useNavigate();

	const [routesArr, dispatch] = useReducerMap(reducerMap, routes);

	// console.log(routesArr);

	// 1. Dynamic route isn't found so NoRouteFound is loaded, and uses the useNavUp custom hook, navigates up to a found route that adds the dynamic routes
	// 2. After the routes are added, executes this effect to return to the url from where it originally came from.

	// This makes it possible to return to the dynamically created route after the dynamic routes are added.
	// state.before is set in the useNavUp hook.


	React.useEffect(() => {
		// console.info('effect after adding new routes');

		const prevPaths = location?.state?.before;

		if (prevPaths && prevPaths.length) {

			// get the path to navigate to
			const navigateTo = location.state.before.shift();
			// console.info('navigate to: %o', navigateTo);

			navigate(navigateTo, {replace: true, state: {before: location.state.before}});
		}
	}, [routesArr])


	const routesData = React.useMemo(() => ({routes: routesArr, dispatch}), [dispatch, routesArr]);
	// console.log('routes Array: %o', routesArr);
	const routesElement = useRoutes(routesArr);


	if (!routesArr.length)
		return null;

	return (
		<RouterContext.Provider value={routesData} {...rest} >
			{routesElement}
		</RouterContext.Provider>
	)
}

export function useRouterContext() {
	return useContext(RouterContext);
}


