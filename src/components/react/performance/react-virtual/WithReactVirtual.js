import React from 'react'
import {useVirtual} from 'react-virtual';
import ListItem from './components/ListItem';



function WithReactVirtual({items}) {

  const listRef = React.useRef()
  const rowVirtualizer = useVirtual({
	 size: items.length,
	 parentRef: listRef,
	 estimateSize: React.useCallback(() => 24, []),
	 overscan: 10,
  })

  return (
	 <ul ref={listRef} style={{listStyle: 'none', position: 'relative', height: 295, overflow: 'auto'}}>
		<li style={{height: rowVirtualizer.totalSize}} />
		
		{rowVirtualizer.virtualItems.map(({index, size, start}) => {
		  const item = items[index]
		  return (
			 <ListItem
				key={index}
				style={{
				  position: 'absolute',
				  top: 0,
				  left: 0,
				  width: '100%',
				  height: size,
				  transform: `translateY(${start}px)`,
				}}
			 >
				{item.name}
			 </ListItem>
		  )
		})}
	 </ul>
  )
}


export default function ReactVirtual() {

	const [cities, setCities] = React.useState([]);

	React.useEffect(() => {
		import('./data/us-cities.json')
			.then(cities => {
				const citiesArr = Object.keys(cities).map(index => cities[index]);
				setCities(citiesArr)
			})
	}, [])

	if (!cities.length)
		return <div>Loading...</div>

	return (
		<>
			<WithReactVirtual items={cities} />
		</>
	)
}