// tokenService.js
import {getUser, saveUser} from "./storage";

export const getAccessToken = () => {
	const user = getUser();
	return user ? user.accessToken : null;
};

export const setAccessToken = (token) => {
	const user = getUser();
	if (user) {
		user.accessToken = token;
		saveUser(user);
	}
};


