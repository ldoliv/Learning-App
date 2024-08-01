// useUrlParam.js

// import {useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';


export const isNumber = (str) => {
	return str !== '' && !isNaN(parseFloat(str)) && isFinite(str);
};

function getValue(val, defaultVal) {
	return (val != null && val !== undefined)
		? isNumber(val)
			? Number(val)
			: val
		: defaultVal
}

export function useUrlParam(param = 'param', defaultVal = '') {
	// const [searchParams, setSearchParams] = useSearchParams();
	const [value, setValue] = useState(() => {
		const searchParams = new URLSearchParams(window.location.search);	// 👈 gets updated correct value
		return getValue(searchParams.get(param), defaultVal)
	});

	// useEffect(() => {
	// 	const currentParamValue = getValue(searchParams.get(param));
	// 	if (currentParamValue !== value) {
	// 		setValue(currentParamValue);
	// 	}
	// }, [searchParams, param]);

	// updates "value" based on the url parameter when popstate (going back) fires
	useEffect(() => {
		const handlePopState = () => {
			const newParams = new URLSearchParams(window.location.search);
			const currentParamValue = getValue(newParams.get(param), defaultVal);
			setValue(currentParamValue);
		};
		window.addEventListener('popstate', handlePopState);

		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	}, [param]);

	// updates the url parameter based on "value"
	useEffect(() => {
		// const newParams = new URLSearchParams(searchParams);			// 👈 not working correctly, gets old value
		const newParams = new URLSearchParams(window.location.search);	// 👈 gets updated correct value
		const currentValue = getValue(newParams.get(param));
		if (currentValue != value) {
			if (value) {
				newParams.set(param, value);
			} else {
				newParams.delete(param);
			}
			// setSearchParams(newParams);

			const searchParams = newParams.toString();
			const newUrl = `${window.location.pathname}${searchParams ? `?${searchParams}` : ``}${window.location.hash}`;
			// window.history.replaceState(null, '', newUrl);
			window.history.pushState(null, '', newUrl);
		}

	}, [value, param]);

	return [value, setValue];
}
