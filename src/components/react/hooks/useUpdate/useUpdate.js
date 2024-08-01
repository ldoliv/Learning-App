import {useEffect, useRef} from 'react';


// an effect that doesn't run on init
// ignores the first render

export function useUpdate(callback, deps = []) {
	const ref = useRef(true);

	useEffect(() => {
		// the first time it runs it ignores
		if (ref.current) {
			ref.current = false;
			return;
		}
		return callback();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [callback, ...deps])
}
