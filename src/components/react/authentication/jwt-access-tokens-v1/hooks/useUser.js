import {useState} from "react";
import {getUser, removeUser, saveUser} from "../services/storage";
import {apiMethods} from "../services/api";

export function useUser() {
	const [user, setUser] = useState(() => getUser());

	const handleLogin = async () => {
		try {
			const loginResponse = await apiMethods.login({
				username: 'leo123',
				password: '123'
			});
			saveUser(loginResponse);
			setUser(loginResponse);
		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	const handleLogout = async () => {
		try {
			await apiMethods.logout();
			removeUser();
			setUser(null);
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	return {user, handleLogin, handleLogout};
}
