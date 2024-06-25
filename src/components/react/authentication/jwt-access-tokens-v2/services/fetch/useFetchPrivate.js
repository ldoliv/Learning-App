import {useEffect, useCallback} from "react";
import {authActions, useAuthContext} from "../../contexts/AuthProvider";
import {privateRequest, publicRequest} from "./fetch";
import {handleError} from "./fetchInstance";


export function useFetchPrivate() {

	const {auth, dispatch} = useAuthContext();

	
	useEffect(() => {

		const requestIntercept = (
			config => {
				// state update has a delay, so we get it from config first if it exists
				const token = config?._accessToken || auth?.user?.accessToken;

				if (!token) {
					throw new Error('No token to send');
				}
				// console.log(config);
				config.headers['Authorization'] = `Bearer ${token}`;
				return config;
			});

		const responseIntercept = (
			async (response, config, makeRequest) => {

				// console.log(response);

				// useAuthentication is private requests
				if (response.status === 401 && !config?.sent) {
					config.sent = true;

					try {
						const response = await fetch(`${config.baseURL}/refresh`, {
						// const refreshData = await publicRequest(`/refresh`, {
							method: 'POST',
							credentials: 'include',
						});

						const refreshData = await response.json();
						// console.log(refreshData);
						const newAccessToken = refreshData.accessToken;

						config._accessToken = newAccessToken;		// 👈 update here so we can use imediately, setAccessToken state has a delay
						dispatch(authActions.updateAccessToken(newAccessToken));

						config.headers['Authorization'] = `Bearer ${newAccessToken}`;
						return makeRequest(config.url, config);

					} catch (refreshErr) {
						// refresh endpoint failed so ensure we properly logout the user
						// console.log('refreshErr: %o', refreshErr);
						try {

							await fetch(`${config.baseURL}/logout`, {
							// const response = await publicRequest('/logout', {
								method: 'POST',
								body: JSON.stringify({}),
								credentials: 'include',		// 👈 must be set for the endpoint that creates and sets the cookie
							});
							dispatch(authActions.logout(new Error('Your session has expired, please log in again.')));

						} catch (logoutErr) {
							console.log(logoutErr);
							return handleError(logoutErr);
						}
						// console.log(refreshErr);
						// return handleError(refreshErr);
					}
				} else {
					// console.log(response);
					return response;
				}
			}
		);

		privateRequest.addRequestInterceptor(requestIntercept);
		privateRequest.addResponseInterceptor(responseIntercept);

		return () => {
			privateRequest.removeRequestInterceptor(requestIntercept);
			privateRequest.removeResponseInterceptor(responseIntercept);
		}
	}, [auth?.user?.accessToken, dispatch]);

	return privateRequest;

}
