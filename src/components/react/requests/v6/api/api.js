import {useCallback} from 'react';
import {useAsync} from "components/react/hooks/useAsync/v2/useAsync";
import {fetchApi, axiosApi} from "../helpers/helpers";


const url = `https://jsonplaceholder.typicode.com/users/`;
// const url = `https://jsonplaceholder.typicode.com/usersss/1654654`;		// 404
// const url = `https://jsonplaceholder.typicod.com/usersss/1654654`;		// net::ERR_NAME_NOT_RESOLVED		| domain issue



export function apiMethods() {

	return {
		getUser: async (id, opts) => {
			// return await fetchApi(url + id, opts);
			return await axiosApi(url + id, opts);
		},

		useGetUser: () => {

			const [state, request] = useAsync(fetchApi, {
				delay: 1000,
				abortRequest: true,
				// failRate: 0.5
			});

			const makeRequest = useCallback((id) => {
				request(url + id)
			}, [request]);

			return [state, makeRequest];
		}

	};

}
