
export function getUser() {
	const userStr = sessionStorage.getItem('user');
	const user = JSON.parse(userStr);
	return user;
}

export function saveUser(user) {
	sessionStorage.setItem('user', JSON.stringify(user));
}

export function removeUser() {
	sessionStorage.removeItem('user');
}