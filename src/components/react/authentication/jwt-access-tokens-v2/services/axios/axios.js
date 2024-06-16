import {config} from "../../config";
import {createAxiosInstance} from "./axiosInstance";



// Public request instance
export const publicRequest = createAxiosInstance({
	baseURL: config.API_BASE_URL,
});

// Private request instance with authentication
export const privateRequest = createAxiosInstance({
	baseURL: config.API_BASE_URL,
	useAuthentication: true,
});

