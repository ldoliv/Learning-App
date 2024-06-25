import {config} from "../../config";
import {createFetchInstance} from "./fetchInstance";



// Public request instance
export const publicRequest = createFetchInstance({
	baseURL: config.API_BASE_URL,
});

// Private request instance with authentication
export const privateRequest = createFetchInstance({
	baseURL: config.API_BASE_URL,
	useAuthentication: true,
});

