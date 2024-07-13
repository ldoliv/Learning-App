import React, {useState, useEffect, useRef} from 'react';



function requestAnimFrame(callback) {
	let ticking = false;
	return function(...args) {
		if (!ticking) {
			ticking = true;
			window.requestAnimationFrame(() => {
				callback.apply(this, args);
				ticking = false;
			});
		}
	}
}

/**
 * Custom hook that detects the scroll direction of a specified element or the window.
 * 
 * @param {React.RefObject} providedRef - An optional ref object pointing to a scrollable element. 
 *                                        If not provided, the hook will track the window scroll direction.
 * @returns {Object} - An object containing the scroll direction ('up' or 'down').
 *
 * Usage:
 * const { direction } = useScrollDirection(ref);
 *
 * - If a ref is provided, the hook will track the scroll direction of the element referenced by the ref.
 * - If no ref is provided, the hook will track the scroll direction of the window.
 */
export default function useScrollDirection(providedRef) {
	const [direction, setDirection] = useState('');
	const internalRef = useRef(window);
	const ref = providedRef || internalRef;

	useEffect(() => {
		let prevScrollY = null;

		const handleScroll = requestAnimFrame(() => {
			const scrollY = ref.current === window ? window.scrollY : ref.current.scrollTop;

			if (!prevScrollY) {
				prevScrollY = scrollY;
				return;
			}

			if (prevScrollY < scrollY) {
				setDirection('down');
			} else if (prevScrollY > scrollY) {
				setDirection('up');
			}
			prevScrollY = scrollY;
		});

		ref.current.addEventListener('scroll', handleScroll);

		return () => {
			prevScrollY = null;
			ref.current.removeEventListener('scroll', handleScroll);
		};
	}, [ref]);

	return {direction};
}
