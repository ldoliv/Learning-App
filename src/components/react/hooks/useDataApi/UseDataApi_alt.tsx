import React, {useEffect, useState} from "react";

/**
 * Handles HTTP error responses and returns a user-friendly error message.
 */
function handleErrorResponse(response: Response): string {
	switch (response.status) {
		case 404:
			return 'Resource not found';
		default:
			return `Unhandled response status: ${response.status}`;
	}
}

type Data<T> = T[] | null;

interface State<T> {
	loading: boolean;
	data: Data<T>;
	error: Error | null;
}

type UseDataApiReturnType<T> = [boolean, Data<T>, Error | null, (url: string) => void];

/**
 * Custom hook for fetching data from an API.
 */
function useDataAPI<T>(initialData: Data<T>): UseDataApiReturnType<T> {
	const [{loading, data, error}, setState] = useState<State<T>>({
		loading: false,
		data: initialData,
		error: null,
	});
	const [url, setUrl] = useState<string | null>(null);

	useEffect(() => {
		let mounted = true;

		const fetchData = async (url: string) => {
			setState(state => ({...state, loading: true}));
			try {
				const response = await fetch(url);
				if (mounted) {
					if (response.ok) {
						const jsonData = await response.json();
						setState({loading: false, data: jsonData, error: null});
					} else {
						const errorMessage = handleErrorResponse(response);
						setState({loading: false, data: null, error: new Error(errorMessage)});
					}
				}
			} catch (error) {
				if (mounted) {
					setState({loading: false, data: null, error: error instanceof Error ? error : new Error(String(error))});
				}
			}
		};

		if (url) fetchData(url);

		return () => {
			mounted = false;
		};
	}, [url]);

	return [loading, data, error, setUrl];
}

// -----------------------------------------------------------------------------



interface Comment {
	id: number;
	name: string;
	email: string;
	body: string;
}

/**
 * Component for fetching and displaying comments.
 */
export function DataApi() {
	const [loading, data, error, fetchData] = useDataAPI<Comment>(null);

	return (
		<>
			<div>{loading ? 'Loading data...' : ' '}</div>
			<button onClick={() => fetchData('https://jsonplaceholder.typicode.com/posts/1/comments')}>Get data</button>
			{data && (
				<ul>
					{data.map(comment => (
						<li key={comment.id}>
							Id: {comment.id}<br />
							Name: {comment.name}<br />
							Email: {comment.email}<br />
							Body: {comment.body}
						</li>
					))}
				</ul>
			)}
			{error && <div>Error: {error.message}</div>}
		</>
	);
}
