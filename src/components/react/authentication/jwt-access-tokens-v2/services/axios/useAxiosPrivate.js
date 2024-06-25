import {useEffect} from "react";
import {authActions, useAuthContext} from "../../contexts/AuthProvider";
import {privateRequest, publicRequest} from "./axios";
import {handleError} from "./axiosInstance";



export function useAxiosPrivate() {

	const {auth, dispatch} = useAuthContext();


	useEffect(() => {

		const requestIntercept = privateRequest.interceptors.request.use(
			config => {
				// state update has a delay, so we get it from config first if it exists
				const token = config?._accessToken || auth.user?.accessToken;

				if (!token) {
					throw new Error('No token to send');
				}
				config.headers['Authorization'] = `Bearer ${token}`;
				return config;
			}, (error) => Promise.reject(error));

		const responseIntercept = privateRequest.interceptors.response.use(
			response => response,
			async (error) => {

				const prevRequest = error?.config;

				if (error?.response?.status === 401 && !prevRequest?.sent) {
					try {
						prevRequest.sent = true;

						const refreshData = await publicRequest.post(`/refresh`, {}, {
							withCredentials: true,
						});
						const newAccessToken = refreshData.accessToken;

						// state update has a delay, so we save it to a custom property in the request config
						prevRequest._accessToken = newAccessToken;
						dispatch(authActions.updateAccessToken(newAccessToken));

						prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
						return privateRequest(prevRequest); // Retry the original request with new token

					} catch (refreshErr) {
						// refresh endpoint failed so ensure we properly logout the user
						// console.log('refreshErr: %o', refreshErr);
						try {

							const responseData = await publicRequest.post('/logout', {}, {
								withCredentials: true
							});
							dispatch(authActions.logout(new Error('Your session has expired, please log in again.')));
							return responseData;

						} catch (logoutErr) {
							return handleError(logoutErr);
						}
					}

				} else {
					// return Promise.reject(error);
					return handleError(error);
				}
			}
		);

		return () => {
			privateRequest.interceptors.request.eject(requestIntercept);
			privateRequest.interceptors.response.eject(responseIntercept);
		}
	}, [auth.user?.accessToken, dispatch]);

	return privateRequest;

}
