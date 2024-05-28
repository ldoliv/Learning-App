
export const routes = [
	{
		path: 'counter-simple',
		label: <>
			<p>Simple Counter</p>
		</>,
		componentFilename: '1.counter/Counter'
	},
	{
		path: 'counter-context',
		label: <>
			<p>Counter using context</p>
		</>,
		componentFilename: '2.counter-context/CounterContext'
	},
	{
		path: 'list-items',
		label: <>
			<p>List Items - Add remove items</p>
		</>,
		componentFilename: '3.list-items/ListItems'
	},
	{
		path: 'api-data',
		label: <>
			<p>Displaying Data Coming From an API</p>
		</>,
		componentFilename: '4.api-data/ApiData'
	},
	{
		path: 'hoc',
		label: <>
			<p>Reuse code by creating a hoc for 3 similar components</p>
		</>,
		componentFilename: '5.hoc/Hoc'
	}
];

