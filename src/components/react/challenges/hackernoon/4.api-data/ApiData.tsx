import React from 'react'
import axios, {AxiosError} from 'axios'


function useDataApi<T>(defaultVal: T[]) {

	const [url, setUrl] = React.useState<string>();
	const [response, setResponse] = React.useState<{data: T[], error: AxiosError | null}>({
		data: defaultVal,
		error: null
	});

	
	React.useEffect(() => {
		let canceled = false

		const request = async (url: string) => {
			try {
				const {data} = await axios.get(url);

				if (!canceled) {
					setResponse({data, error: null});
				}
			} catch (error: any) {
				if (!canceled) {
					setResponse({data: [], error});
					// throw error;
				}
			}
		}

		if (url && !canceled) {
			request(url)
		}

		return () => {
			canceled = true
		}
		
	}, [url])
	

	return [response, setUrl] as const
}


const request = async (url: string) => {
	// try {
	// 	const {data} = await axios.get(url);
	// 	return data;
	// } catch (error) {
	// 	throw error;
	// }

	return axios.get(url)
		.then(response => response.data)
}

type dataI = {
	id: number,
	name: string,
	email: string
}
export default function ApiData() {

	const [response, setUrl] = useDataApi<dataI>([]);
	const {data, error} = response;

	// console.log(data, error);
	
	// const [data, setData] = React.useState<dataI[]>([]);

	React.useEffect(() => {
		setUrl('https://jsonplaceholder.typicode.com/posts/1/comments')

		// request('https://jsonplaceholder.typicode.com/posts/1/commentss')
		// 	.then(data => {
		// 		setData(data)
		// 	})
		// 	.catch(error => console.log(error))
	}, [])
	

	if (error) return <div>{error.message}</div>
	if (!data.length) return null;

	return (
		<div>{
			data.map((item, idx) => {
				return <div className='mb-4' key={idx}>
					<div>Id: {item.id}</div>
					<div>Name: {item.name}</div>
					<div>Email: {item.email}</div>
				</div>
			})
		}</div>
	)
}
