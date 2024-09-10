import {useState, useEffect} from 'react';
import {fetchApi} from '../helpers/helpers';


const STATUS = {
	IDLE: 'IDLE',
	PENDING: 'PENDING',
	RESOLVED: 'RESOLVED',
	REJECTED: 'REJECTED'
}

function getStatus(status) {
	return {
		idle: status === STATUS.IDLE,
		pending: status === STATUS.PENDING,
		resolved: status === STATUS.RESOLVED,
		rejected: status === STATUS.REJECTED
	};
}

export function useFetchApi() {

	const [url, setUrl] = useState();
	const [state, setState] = useState({
		status: getStatus(STATUS.IDLE),
		data: null,
		error: null
	});

	useEffect(() => {
		let mounted = true;

		const makeRequest = async () => {

			try {
				setState(prevState => ({...prevState, status: getStatus(STATUS.PENDING)}));
				const data = await fetchApi(url);
				if (mounted) {
					setState({status: getStatus(STATUS.RESOLVED), data, error: null});
				}
			} catch (error) {
				if (mounted) {
					setState({status: getStatus(STATUS.REJECTED), data: null, error});
				}
			}
		}

		if (url) {
			makeRequest();
		}

		return () => {
			mounted = false;
		}

	}, [url])

	return [state, setUrl];

}