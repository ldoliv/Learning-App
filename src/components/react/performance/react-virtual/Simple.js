import React from 'react'
import ListItem from './components/ListItem';


function SimpleList({items = []}) {

  return (
	  <ul style={{
		  height: 295,
		  overflow: 'auto',
		  listStyle: 'none',
	  }}>
		{items.map((item, index) => (
			<ListItem key={index}>{item.name}</ListItem>
		))}
	 </ul>
  )
}


export default function ReactVirtual() {

	const [cities, setCities] = React.useState([]);

	React.useEffect(() => {
		import('./data/us-cities.json')
			.then(cities => {
				const citiesArr = Object.keys(cities).map(index => cities[index]);	// didn't quite get this step as it creates an exact structure just like "cities".
				setCities(citiesArr)
			})
	}, [])

	if (!cities.length)
		return <div>Loading...</div>

	return (
		<>
			<SimpleList items={cities} />
		</>
	)
}