import {useState, useEffect} from 'react';
import debounce from 'lodash.debounce'; // Ensure lodash.debounce is installed



const useDetectOverflow = (ref, delay = 300) => {
	const [hasOverflow, setHasOverflow] = useState(false);

	useEffect(() => {
		const checkOverflow = () => {
			if (ref.current) {
				// if (ref.current.classList.contains('custom-valuecontainer')) {
				// 	console.log(ref.current, ref.current.scrollHeight, ref.current.clientHeight);
				// }
				setHasOverflow(ref.current.scrollHeight > ref.current.clientHeight);
			}
		};

		const debouncedCheckOverflow = debounce(checkOverflow, delay);

		// Initial check
		checkOverflow();

		// Check overflow when the window is resized
		window.addEventListener('resize', debouncedCheckOverflow);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('resize', debouncedCheckOverflow);
		};
	}, [ref, delay]);

	return hasOverflow;
};

export default useDetectOverflow;
