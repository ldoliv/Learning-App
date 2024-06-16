import {useAuthContext, authActions} from '../contexts/AuthProvider';
import {useState, useEffect} from 'react'
import {useAxios} from '../services/axios/useAxios';

/*
	Runs once:
	if refresh token is valid
		returns access token and renovates refresh token
		update access token in state
	else
		if user still in session storage
			properly logout with session expired message
*/

export function usePersistLogin() {

	const apiMethods = useAxios();
	const {auth, dispatch} = useAuthContext();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {

		const requestNewToken = async () => {
			try {
				// await delay(1000);
				const response = await apiMethods.refresh();
				console.log(response);
				dispatch(authActions.updateAccessToken(response.accessToken))

			} catch (error) {
				// Failed to reestablish the session with the refresh token
				console.log(error);
				if (auth.authenticated) {
					dispatch(authActions.logout(new Error('Your session has expired, please log in again.')));
				}

			} finally {
				setIsLoading(false)
			}
		}

		if (!auth.user?.accessToken) {
			requestNewToken();
		} else {
			setIsLoading(false)
		}

		return () => {

		}
	}, [])

	return {isLoading}
}
