
export const routes = [
	{
		path: 'useAnimationProgress',
		label: <>
			useAnimationProgress<br />
			<ul>
				<li>Synchronize a state value with an element's CSS animation progress using a custom CSS variable. Useful for tracking animation progress in real-time.</li>
			</ul>
		</>,
		componentFilename: 'useAnimationProgress',
	},
	{
		path: 'useUrlParam',
		label: <>
			useUrlParam<br />
			<ul>
				<li>Synchronize a state value with a URL query parameter. Useful where the URL represents the current state, such as filter settings, pagination, or form values.</li>
			</ul>
		</>,
		componentFilename: 'useUrlParam',
	},
	{
		path: 'useScrollDirection',
		label: <>
			useScrollDirection<br />
			<ul>
				<li>Detect scroll direction ('up' or 'down') of a specified element or window. Tracks and returns the current scroll direction in real-time.</li>
			</ul>
		</>,
		componentFilename: 'useScrollDirection',
	},
	{
		path: 'useSharedState',
		label: <>
			useSharedState<br />
			<ul>
				<li>Share state between sibling components easily with createSharedState. This custom hook syncs state across multiple components, ensuring consistency without lifting state up to a common parent.</li>
			</ul>
		</>,
		componentFilename: 'useSharedState',
	},
	{
		path: 'usePrevious',
		label: <>
			usePrevious<br />
			<ul>
				<li>Track previous state values with usePrevious hook. This custom hook returns the current value, previous value, and a setter, useful for comparing changes over renders.</li>
			</ul>
		</>,
		componentFilename: 'usePrevious',
	},
	{
		path: 'useUpdate',
		label: <>
			useUpdate<br />
			<ul>
				<li>Run effects only on updates with useUpdate hook. This custom hook ignores the initial render, executing the callback only on dependency changes after the first render.</li>
			</ul>
		</>,
		componentFilename: 'useUpdate',
	},
	{
		path: 'useRenderCounter',
		label: <>
			useRenderCounter<br />
			<ul>
				<li>Track component renders with useRenderCounter hook. It displays a counter that increments on each render, changing background color briefly to highlight updates.</li>
			</ul>
		</>,
		componentFilename: 'useRenderCounter',
	},
	{
		path: 'useAsync',
		label: <>
			useAsync<br />
			<ul>
				<li>Manage async operations with useAsync hook. It handles loading, success, and error states with optional state management, supports request cancellation, and ensures safe updates in unmounted components.</li>
			</ul>
		</>,
		componentFilename: 'useAsync',
	},
	{
		path: 'useApi',
		label: <>
			useApi<br />
			<ul>
				<li>Manage API interactions with the useApi hook, ensuring safe state updates, handling loading, success, and error states, and preventing memory leaks by only setting state if the component is still mounted.</li>
			</ul>
		</>,
		componentFilename: 'useApi',
	},
	{
		path: 'useMounted',
		label: <>
			useMounted<br />
			<ul>
				<li>Simulate asynchronous requests safely with TestUseMounted. This custom hook ensures state updates only occur if the component is still mounted, preventing potential memory leaks during async operations.</li>
			</ul>
		</>,
		componentFilename: 'useMounted',
	},
	{
		path: 'useMedia',
		label: <>
			useMedia<br />
			<ul>
				<li>Track media query matches with useMedia hook. It updates state based on media query results, ensuring efficient re-renders and preventing memory leaks with cleanup.</li>
			</ul>
		</>,
		componentFilename: 'useMedia',
	},
	{
		path: 'useDetectOverflow',
		label: <>
			useDetectOverflow<br />
			<ul>
				<li>It checks if an element's content overflows its container, updating state and handling debounced resize events for efficient performance.</li>
			</ul>
		</>,
		componentFilename: 'useDetectOverflow',
	},
	{
		path: 'useBreakpoints',
		label: <>
			useBreakpoints<br />
			<ul>
				<li>Returns the current breakpoint state based on window width, supports dynamic breakpoints, and updates state efficiently with debounced resize events.</li>
			</ul>
		</>,
		componentFilename: 'useBreakpoints',
	},
	{
		path: 'usePagination',
		label: <>
			usePagination<br />
			<ul>
				<li>simplifies pagination logic for React components. It calculates the range of page numbers to display, as well as whether to show navigation buttons for the first and last pages.</li>
			</ul>
		</>,
		componentFilename: 'usePagination',
	},
];
