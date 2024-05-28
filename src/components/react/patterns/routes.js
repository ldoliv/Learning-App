

export const routes = [
	{
		path: 'trigger-state-service',
		label: <>
			Trigger State Service
			<ul>
				<li>Trigger a component's state from outside itself</li>
			</ul>
		</>,
		componentFilename: 'trigger-state-service',
	},
	{
		path: 'render-props',
		label: 'Render Props',
		componentFilename: 'render-props',
	},
	{
		path: 'hocs',
		label: 'Hocs',
		componentFilename: 'hocs',
	},
	{
		path: 'compound-components',
		label: <>
			Compound Components Pattern
			<ul>
				<li>Implicitly share state between parent and children for reusable components to form a complete UI.</li>
			</ul>
		</>,
		componentFilename: 'compound-components'
	},
	{
		path: 'prop-getters',
		label: <>
			Prop Getters Pattern
			<ul>
				<li>Add support to your hook for common use cases for UI elements</li>
				<li>Basically your component provides a props object or a function that people can use to spread props across UI elements.</li>
			</ul>
		</>,
		componentFilename: 'prop-getters',
	},
	{
		path: 'state-reducer',
		label: <>
			State Reducer Pattern
			<ul>
				<li>Simple Toogle Control</li>
				<li>Toggle Control with a custom state reducer</li>
				<li>Inversion of control</li>
			</ul>
		</>,
		componentFilename: 'state-reducer/StateReducer',
	},
	{
		path: 'control-props',
		label: <>
			Control Props Pattern
			<ul>
				<li>Useful for building controled components, you have control over the state of the component. It's more powerful than the state reducer pattern, not only can you changes the state based on actions dispatched, but you also can trigger state changes from outside the component or hook as well.</li>
			</ul>
		</>,
		componentFilename: 'control-props',
	},
];
