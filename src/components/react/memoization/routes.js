
export const routes = [
	{
		path: 'v1',
		label: <>
			<p>V1 - Show how the child component rerenders every time the state changes.</p>
		</>,
		componentFilename: 'versions/Memo1.js'
	},
	{
		path: 'v2',
		label: <>
			<p>V2 - Using React.memo on the child component, passing primitive props.</p>
		</>,
		componentFilename: 'versions/Memo2.js'
	},
	{
		path: 'v3',
		label: <>
			<p>V3 - Using React.memo on the child component, passing an object as props and using a comparison function.</p>
		</>,
		componentFilename: 'versions/Memo3.js'
	},
	{
		path: 'v4',
		label: <>
			<p>V4 - Using React.memo passing a function as prop with and without useCallback().</p>
		</>,
		componentFilename: 'versions/Memo4.js'
	},
	{
		path: 'v5',
		label: <>
			<p>V5 - Making use of React.memo with the comparison function as well as useCallback()</p>
		</>,
		componentFilename: 'versions/Memo5.js'
	},
	{
		path: 'memo-context',
		label: <>
			<p>Memoizing react context</p>
		</>,
		componentFilename: 'versions/memo-context/MemoContext'
	},
];