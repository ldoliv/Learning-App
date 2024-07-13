import {useEffect} from "react";


export function saveUser(user) {
	sessionStorage.setItem('user', JSON.stringify(user))
}

export function getUser() {
	return JSON.parse(sessionStorage.getItem('user'));
}

export function removeUser() {
	sessionStorage.removeItem('user');
}

