import {useRef, useEffect} from 'react';
import {useCallback} from 'react';
import debounce from 'lodash.debounce';


// This way avoids component rerender

export function InputFilter({onSearch, text, ...rest}) {

	const ref = useRef();

	useEffect(() => {
		ref.current.value = text;
	}, [text])

	function handleInputChange(e) {
		const value = e.target.value;
		debounceSearch(value)
		// handleSearch(value);
	}

	function handleSearch(text) {
		onSearch(text);
	}

	const debounceSearch = useCallback(debounce(handleSearch, 300), []);

	
	return (
		<input type='text' placeholder='Search...' {...rest} ref={ref} onChange={handleInputChange} />
	)
}