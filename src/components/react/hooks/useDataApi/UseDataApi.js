import {useState, useEffect, useReducer} from 'react';
import axios from 'axios';



/*
	https://www.robinwieruch.de/react-hooks-fetch-data/
	https://github.com/the-road-to-learn-react/use-data-api/blob/master/src/index.js
*/

const dataFetchReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_INIT':
			return {...state, isLoading: true, isError: false};
		case 'FETCH_SUCCESS':
			return {...state, isLoading: false, isError: false, data: action.payload };
		case 'FETCH_FAILURE':
			return {...state, isLoading: false, isError: true };
		default:
			throw new Error();
	}
};

export const useDataApi = (initialUrl, initialData) => {
	
	const [url, setUrl] = useState(initialUrl);

	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		data: initialData,
	});

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			dispatch({type: 'FETCH_INIT'});

			try {
				const result = await axios(url);

				if (isMounted) {
					dispatch({type: 'FETCH_SUCCESS', payload: result.data});
				}

			} catch (error) {
				
				if (isMounted) {
					dispatch({type: 'FETCH_FAILURE'});
				}
			}
		};

		if (isMounted && url) {
			fetchData();
		}

		return () => {
			isMounted = false;
		};

	}, [url]);

	return [state, setUrl];
};
