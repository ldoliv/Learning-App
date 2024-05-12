import React from 'react';

function List({items, isLoading, isError}) {

	// console.log('List rendered');

	if (isError) return <div>Something went wrong...</div>

	const loading = isLoading ? <div>Loading...</div> : <div>&nbsp;</div>

	return (
		<>
			{loading}
			<div className="list is-hoverable">
				{items.map(item => <div key={item.id}>{item.title}</div>)}
				{!items.length && <div>No results</div>}
			</div>
		</>
	)
}

export default List;

// export default React.memo(List, ((prevProps, nextProps) => {
// 	return !prevProps.items.length && prevProps.items.length === nextProps.items.length
// }));