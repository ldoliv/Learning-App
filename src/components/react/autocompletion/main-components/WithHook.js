import {useCallback, useEffect, useMemo, useState} from 'react';
// import lodash from 'lodash';
import debounce from 'lodash.debounce';
import {useDataApi} from '../../hooks/use-data-api/UseDataApi';
import InputSearch from '../components/InputSearch';
import List from '../components/List';


/*
	https://www.robinwieruch.de/react-hooks-fetch-data/
	https://github.com/the-road-to-learn-react/use-data-api/blob/master/src/index.js
*/

export default function AutocompletionWithHook() {

	const ITEMS_API_URL = 'https://dummyjson.com/products/search';
	const DEBOUNCE_DELAY = 500;

	// const [items, setItems] = useState([]);
	const [query, setQuery] = useState('');

	const [{isLoading, isError, data}, doFetch] = useDataApi(null, []);


	useEffect(() => {

		return () => {
			// loadash debounce has a cancel method.
			debouceSearch.cancel();		// ✅ cancel execution when unmounting the component
		}
	}, [])


	// ❌ debounce function gets called on every render
	// const debouceSearch = useCallback(() => {
	// 	console.log('useCallback');
	// 	return debounce(getItems, DEBOUNCE_DELAY)
	// }, []);

	// ✅ works correctly
	const debouceSearch = useCallback(debounce(getItems, DEBOUNCE_DELAY), []);


	// ✅ alternative correct way, memoizes the result returned by the function
	// const debouceSearch = useMemo(() => {
	// 	console.log('useMemo');
	// 	return debounce(getItems, DEBOUNCE_DELAY)
	// }, []);

	// ❌ doesn't work
	// const debouceSearch = useMemo(debounce(getItems, DEBOUNCE_DELAY), []);




	function getItems(qVal) {
		doFetch(`${ITEMS_API_URL}?q=${qVal}`);
	}

	function handleSearch(value) {
		setQuery(value);

		if (value.length > 2) {
			debouceSearch(value);
		}
	}

	const products = data.products || [];


	return (
		<>
			<div className="wrapper">
				<div>With Hook</div>
				<InputSearch className="mb-4" loading={isLoading} onChange={handleSearch} value={query} />
				<List items={products} isLoading={isLoading} isError={isError} />
			</div>
		</>
	)
}