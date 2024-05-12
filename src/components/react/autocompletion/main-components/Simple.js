import axios from 'axios';
import React, {useState, useCallback, useMemo} from 'react';
import debounce from 'lodash.debounce';
import InputSearch from '../components/InputSearch';
import List from '../components/List';



export default function AutocompletionSimple() {

	const [isLoading, setIsLoading] = useState(false);
	const [items, setItems] = useState([]);
	const [query, setQuery] = useState('');

	const ITEMS_API_URL = 'https://dummyjson.com/products/search';
	const DEBOUNCE_DELAY = 1000;


	// 1
	const handleSearch = value => {
		setQuery(value);

		if (value.length > 2) {
			debouceSearch2(value);
		}
	}

	// 2

	// This is to test entering multiple caracters fast and see the difference between with or without a stable function reference.
	// const debouceSearch2 = debounce(getItems, DEBOUNCE_DELAY);

	// ✅ This is necessary to create a stable reference, not for preventing the child from rerendering, but so that each time this component is rendered it doesnt reset and create a new debounce.
	const debouceSearch2 = useCallback(debounce(getItems, DEBOUNCE_DELAY), []);
	// const debouceSearch2 = useMemo(() => debounce(getItems, DEBOUNCE_DELAY), []);
	// const debouceSearch2 = React.useRef(debounce(getItems, DEBOUNCE_DELAY)).current;

	// ❌ Does not work
	// const debouceSearch2 = useCallback(() => {
	// 	console.log('debounce callback');
	// 	return debounce(getItems, DEBOUNCE_DELAY)
	// }, []);

	
	function getItems(qVal) {

		setIsLoading(true);

		axios.get(ITEMS_API_URL, {
			params: {
				q: qVal
			}
		})
			.then(response => {
				setItems(response.data.products);
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			})
		
	}


	return (
		<>
			<div className="wrapper">
				<div>Simple</div>
				<InputSearch className="mb-4" loading={isLoading} onChange={handleSearch} value={query} />
				<List items={items} isLoading={isLoading} />
			</div>
		</>
	)
}


