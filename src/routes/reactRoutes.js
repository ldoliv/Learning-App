

export const reactRoutes = {
	label: 'React',
	baseFolder: 'react',
	routes: [
		{
			desc: <>
				Autocompletion
				<ul>
					<li>Debounce search requests</li>
					<li>Simple and with hook useDataApi</li>
				</ul>
			</>,
			output: '',
			path: 'autocompletion',
			componentPath: 'autocompletion',
			tags: ['Hooks']
		},
		{
			desc: 'Memoization - React.memo, useCallback and useMemo',
			output: '',
			path: 'memoization',
			componentPath: 'memoization',
			tags: []
		},
		{
			desc: 'Calculator',
			output: '',
			path: 'calculator',
			componentPath: 'calculator',
			tags: []
		},
		{
			desc: 'Error Boundary',
			output: '',
			path: 'error-boundary',
			componentPath: 'error-boundary',
			tags: []
		},
		{
			desc: 'Forwarding Refs',
			output: '',
			path: 'forwarding-refs',
			componentPath: 'forwarding-refs',
			tags: []
		},
		{
			desc: 'Hocs',
			output: '',
			path: 'hocs',
			componentPath: 'hocs',
			tags: []
		},
		{
			desc: 'Portals',
			output: '',
			path: 'portals',
			componentPath: 'portals',
			tags: []
		},
		{
			desc: 'Render Props',
			output: '',
			path: 'render-props',
			componentPath: 'render-props',
			tags: []
		},
		{
			desc: 'Tic Tac Toe',
			output: '',
			path: 'tic-tac-toe',
			componentPath: 'tic-tac-toe',
			tags: []
		},
		{
			desc: 'Unit Testing',
			output: '',
			path: 'unit-testing',
			componentPath: 'unit-testing',
			tags: []
		},
		{
			desc: 'React Router',
			output: '',
			path: 'react-router',
			componentPath: 'react-router',
			tags: []
		},
		{
			desc: 'Dynamic Routes',
			output: '',
			path: 'react-router-dynamic',
			componentPath: 'react-router-dynamic',
			tags: []
		},
		{
			desc: 'Redux like context hooks',
			output: '',
			path: 'redux-like-context-hooks',
			componentPath: 'redux-like-context-hooks',
			tags: []
		},
		{
			desc: <>
				Compound Components Pattern
				<ul>
					<li>Implicitly share state between parent and children for reusable components to form a complete UI.</li>
				</ul>
			</>,
			output: '',
			path: 'patterns/compound-components',
			componentPath: 'patterns/compound-components',
			tags: ['Patterns']
		},
		{
			desc: <>
				Prop Getters Pattern
				<ul>
					<li>Add support to your hook for common use cases for UI elements</li>
					<li>Basically your component provides a props object or a function that people can use to spread props across UI elements.</li>
				</ul>
			</>,
			output: '',
			path: 'patterns/prop-getters',
			componentPath: 'patterns/prop-getters',
			tags: ['Patterns']
		},
		{
			desc: <>
				State Reducer Pattern
				<ul>
					<li>Simple Toogle Control</li>
					<li>Toggle Control with a custom state reducer</li>
				</ul>
			</>,
			output: '',
			path: 'patterns/state-reducer',
			componentPath: 'patterns/state-reducer',
			tags: ['Patterns']
		},
		{
			desc: <>
				Control Props Pattern
				<ul>
					<li>Useful for building controled components, you have control over the state of the component. It's more powerful than the state reducer pattern, not only can you changes the state based on actions dispatched, but you also can trigger state changes from outside the component or hook as well.</li>
				</ul>
			</>,
			output: '',
			path: 'patterns/control-props',
			componentPath: 'patterns/control-props',
			tags: ['Patterns']
		},
		{
			desc: 'Hook - Use Previous',
			output: '',
			path: 'hooks/use-previous',
			componentPath: 'hooks/use-previous',
			tags: ['Hooks']
		},
		{
			desc: 'Hook - Use Update',
			output: '',
			path: 'hooks/use-update',
			componentPath: 'hooks/use-update',
			tags: ['Hooks']
		},
		{
			desc: <>
				Hook - useRenderCounter()
				<ul>
					<li>Provides a count that increments every time the component rerenders.</li>
				</ul>
			</>,
			output: '',
			path: 'hooks/use-render-counter',
			componentPath: 'hooks/use-render-counter',
			tags: ['Hooks']
		},
		{
			desc: <>
				Hook - useAsync()
				<ul>
					<li>Can be used with any async function.</li>
					<li>State returns status, data, error and run().</li>
				</ul>
			</>,
			output: '',
			path: 'hooks/use-async',
			componentPath: 'hooks/use-async',
			tags: ['Hooks']
		},
		{
			desc: <>
				Hook - useMounted()
				<ul>
					<li>Useful to know if a component is still mounted.</li>
					<li>Used for stoping state update when the component is no longer mounted.</li>
				</ul>
			</>,
			output: '',
			path: 'hooks/use-mounted',
			componentPath: 'hooks/use-mounted',
			tags: ['Hooks']
		},
		{
			desc: <>
				Hook - useMedia()
				<ul>
					<li>Returns true/false if the viewport is within the passed media query string. </li>
				</ul>
			</>,
			output: '',
			path: 'hooks/use-media',
			componentPath: 'hooks/use-media',
			tags: ['Hooks']
		},
		{
			desc: <>
				Trigger State Service
				<ul>
					<li>Trigger a component's state from outside itself</li>
				</ul>
			</>,
			output: '',
			path: 'trigger-state-service',
			componentPath: 'trigger-state-service',
			tags: []
		},
		{
			desc: <>
				Custom Modal
			</>,
			output: '',
			path: 'components/use-case/modal__custom',
			componentPath: 'components/use-case/modal__custom',
			tags: ['Components', 'Modal']
		},
		{
			desc: <>
				React Modal Lib
			</>,
			output: '',
			path: 'components/use-case/modal__react-modal-lib',
			componentPath: 'components/use-case/modal__react-modal-lib',
			tags: ['Components', 'Modal']
		},
		{
			desc: <>
				Performance
			</>,
			output: '',
			path: 'performance',
			componentPath: 'performance',
			tags: ['React']
		},
	]
}