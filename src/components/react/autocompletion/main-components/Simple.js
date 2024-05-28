import axios from 'axios';
import React, {useState, useCallback, useMemo, useEffect} from 'react';
import debounce from 'lodash.debounce';
import InputSearch from '../components/InputSearch';
import List from '../components/List';
import { useMounted } from 'components/react/hooks/use-mounted/useMounted';


const ITEMS_API_URL = 'https://dummyjson.com/products/search';
const DEBOUNCE_DELAY = 1000;


export default function AutocompletionSimple() {

	const [isLoading, setIsLoading] = useState(false);
	const [items, setItems] = useState([]);
	const [query, setQuery] = useState('');
	const isMounted = useMounted();


	// 1
	const handleSearch = value => {
		setQuery(value);

		if (value.length > 2) {
			debouceSearch(value);
		}
	}

	// 2

	// This is to test entering multiple caracters fast and see the difference between with or without a stable function reference.
	// const debouceSearch = debounce(getItems, DEBOUNCE_DELAY);

	// ✅ This is necessary to create a stable reference, not for preventing the child from rerendering, but so that each time this component is rendered it doesnt reset and create a new debounce.
	const debouceSearch = useCallback(debounce(getItems, DEBOUNCE_DELAY), []);
	// const debouceSearch = useMemo(() => debounce(getItems, DEBOUNCE_DELAY), []);
	// const debouceSearch = React.useRef(debounce(getItems, DEBOUNCE_DELAY)).current;

	// ❌ Does not work
	// const debouceSearch = useCallback(() => {
	// 	console.log('debounce callback');
	// 	return debounce(getItems, DEBOUNCE_DELAY)
	// }, []);

	useEffect(() => {
		return () => {
			// loadash debounce has a cancel method.
			debouceSearch.cancel();		// ✅ cancel execution when unmounting the component
		}
	}, [])

	
	function getItems(qVal) {

		setIsLoading(true);

		axios.get(ITEMS_API_URL, {
			params: {
				q: qVal
			}
		})
			.then(response => {
				if (isMounted()) {
					setItems(response.data.products);
				}
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				if (isMounted()) {
					setIsLoading(false);
				}
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


