import React from 'react'
import axios, {AxiosError} from 'axios'

	
// https://hackernoon.com/top-3-coding-challenges-for-mid-level-react-developers

function useDataApi<T>(defaultVal: T[]) {

	const [url, setUrl] = React.useState<string>();
	const [response, setResponse] = React.useState<{data: T[], error: AxiosError | null}>({
		data: defaultVal,
		error: null
	});

	
	React.useEffect(() => {
		let isMounted = true

		const request = async (url: string) => {
			try {
				const {data} = await axios.get(url);

				if (isMounted) {
					setResponse({data, error: null});
				}
			} catch (error: any) {
				if (isMounted) {
					setResponse({data: [], error});
					// throw error;
				}
			}
		}

		if (isMounted && url) {
			request(url)
		}

		return () => {
			isMounted = false
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

		setTimeout(() => {
			setUrl('https://jsonplaceholder.typicode.com/posts/1/comments')
		}, 1000)

		// request('https://jsonplaceholder.typicode.com/posts/1/commentss')
		// 	.then(data => {
		// 		setData(data)
		// 	})
		// 	.catch(error => console.log(error))
	}, [])
	

	if (error) return <div>{error.message}</div>
	if (!data.length) return <div>Loading...</div>;

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
