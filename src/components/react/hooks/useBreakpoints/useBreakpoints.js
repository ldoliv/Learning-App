// import {throttle, debounce} from 'helpers';
import {useMemo, useEffect, useState, useCallback} from 'react';
import debounce from 'lodash/debounce';
// import throttle from 'lodash/throttle';



const defaultBreakpoints = {
	tablet: 480, // winWidth >= 480 && winWidth < 1200
	desktop: 1200, // winWidth >= 1200
};

export function useBreakpoints(breakpoints = defaultBreakpoints, delay = 150) {

	const breakpointsSorted = useMemo(() => {
		const entries = Object.entries(breakpoints).sort((a, b) => a[1] - b[1]);
		return Object.fromEntries(entries);
	}, [breakpoints]);

	// Returns the breakpoint string value depending on the screen width
	// The smallest value breakpoint if winWidth is lower than the value will always return breakpoint key 'mobile'
	const getBreakpoint = useCallback(() => {
		const winWidth = window.innerWidth;
		const keys = Object.keys(breakpointsSorted);

		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			if (i === 0 && winWidth < breakpointsSorted[key]) {	// first breakpoint
				return 'mobile';
			} else if (i === keys.length - 1 && winWidth >= breakpointsSorted[key]) {	// last breakpoint
				return key;
			} else if (winWidth >= breakpointsSorted[key] && winWidth < breakpointsSorted[keys[i + 1]]) {	// in between
				return key;
			}
		}
		return null;
	}, [breakpointsSorted]);

	// Returns an object where the keys are the breakpoints and values are boolean, the value is true or false depending on the breakpoint string passed
	const getBreakpointObj = useCallback(
		(breakpoint) => {
			const obj = {mobile: breakpoint === 'mobile'};
			return Object.keys(breakpointsSorted).reduce((acc, key) => {
				acc[key] = key === breakpoint;
				return acc;
			}, obj);
		},
		[breakpointsSorted]
	);

	const [state, setState] = useState(() => getBreakpointObj(getBreakpoint()));

	// update the current breakpoint on resize
	useEffect(() => {
		const onResize = debounce(() => {
			const breakpoint = getBreakpoint();
			if (!state[breakpoint]) {
				setState(getBreakpointObj(breakpoint));
			}
		}, delay);

		onResize();

		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [getBreakpoint, getBreakpointObj, state]);

	return state;
}
