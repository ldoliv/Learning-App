import React, {useEffect, useState, useRef} from "react"


function handleErrorResponse(response) {
	switch (response.status) {
		case 404:
			return 'Resource not found';
		default:
			return `Unhandled response status: ${response.status}`
	}
}

function useDataApi(initialData) {

	const [{loading, data, error}, setState] = useState({
		loading: false,
		data: initialData,
		error: null
	});
	const [url, setUrl] = useState(null);


	useEffect(() => {

		let mounted = true;

		async function request(url) {
			setState(state => ({...state, loading: true}));
			try {
				const response = await fetch(url);
				if (mounted) {
					if (response.ok) {
						const jsonR = await response.json();
						setState(state => ({...state, loading: false, data: jsonR}));
					} else {
						setState(state => ({...state, loading: false, error: new Error(handleErrorResponse(response))}));
					}
				}
			} catch (error) {
				if (mounted) {
					setState(state => ({...state, loading: false, error: new Error(error)}));
				}
			}
		}

		if (url) {
			request(url);
		}

		return () => {
			mounted = false;
		}
	}, [url]);


	return [loading, data, error, setUrl];
}

