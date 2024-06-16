// tokenService.js
import {getUser, saveUser} from "./storage";

export const getAccessToken = async () => {
	const user = await getUser();
	return user ? user.accessToken : null;
};

export const setAccessToken = async (token) => {
	const user = await getUser();
	if (user) {
		user.accessToken = token;
		await saveUser(user);
	}
};

export const clearUser = async () => {
	await saveUser(null);
};
