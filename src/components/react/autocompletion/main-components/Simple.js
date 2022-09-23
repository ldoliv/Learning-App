import axios from 'axios';
import React, {useState, useCallback} from 'react';
import debounce from 'lodash.debounce';
import InputSearch from '../components/InputSearch';
import List from '../components/List';



export default function AutocompletionSimple() {

	const [isLoading, setIsLoading] = useState(false);
	const [items, setItems] = useState([]);
	const [query, setQuery] = useState('');

	const ITEMS_API_URL = 'https://dummyjson.com/products/search';
	const DEBOUNCE_DELAY = 500;


	// 1
	const handleSearch = value => {
		setQuery(value);

		if (value.length > 2) {
			// debouceSearch1(value);
			debouceSearch2(value);
		}
	}

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

	// ✅ see the withHook.js for more insight on using useCallback and useMemo

	// const debouceSearch1 = React.useRef(debounce(getItems, DEBOUNCE_DELAY)).current;
	// const debouceSearch2 = useCallback(() => {
	// 	// console.log('debounce callback');
	// 	return debounce(getItems, DEBOUNCE_DELAY)
	// }, []);

	const debouceSearch2 = useCallback(debounce(getItems, DEBOUNCE_DELAY), []);

	// const debouceSearch2 = useMemo(() => debounce(getItems, DEBOUNCE_DELAY), []);


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


