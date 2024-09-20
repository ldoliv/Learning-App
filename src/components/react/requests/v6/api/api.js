import {useCallback} from 'react';
import {useAsync} from "components/react/hooks/useAsync/v2/useAsync";
import {fetchApi, axiosApi} from "../helpers/helpers";


const url = `https://jsonplaceholder.typicode.com/users/`;
// const url = `https://jsonplaceholder.typicode.com/usersss/1654654`;		// 404
// const url = `https://jsonplaceholder.typicod.com/usersss/1654654`;		// net::ERR_NAME_NOT_RESOLVED		| domain issue



export function apiMethods() {

	return {
		// This function is called from within the hook
		getUser: async (...args) => {

			// console.log(args);

			const [id, ...rest] = args;

			let newArgs = [`${url}${id}`, ...rest];
			console.log(newArgs);

			// return await fetchApi(...newArgs);
			return await axiosApi(...newArgs);
		},

		useGetUser: () => {
			return useAsync(
				async (...args) => {
					console.log(args);
					const [id, ...rest] = args;

					let newArgs = [`${url}${id}`, ...rest];
					// console.log(newArgs);

					// return await fetchApi(...newArgs);
					return await axiosApi(...newArgs);
				},
				{
					delay: 1000,
					abortRequest: true,
					// failRate: 0.5
				});
		},

	};

}
