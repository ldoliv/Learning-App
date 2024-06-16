import {useState, useEffect} from "react";

const getValue = (key, initValue) => {
	// SSR Next.js 
	if (typeof window === 'undefined') return initValue;

	// if a value is already store 
	const localValue = JSON.parse(sessionStorage.getItem(key));
	if (localValue) return localValue;

	// return result of a function 
	if (initValue instanceof Function) return initValue();

	return initValue;
}

const useSessionStorage = (key, initValue) => {
	const [value, setValue] = useState(() => {
		return getValue(key, initValue);
	});

	useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(value));
	}, [key, value])

	return [value, setValue];
}

export default useSessionStorage 