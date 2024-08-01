import {useCallback, useEffect, useRef, useState} from "react";

function useAnimationProgress() {
	const [progress, setProgress] = useState(0);
	const elementConfig = useRef({element: null, pseudoSel: ''});

	useEffect(() => {
		let animationFrameId;

		const checkAnimationProgress = () => {
			const {element, pseudoSel} = elementConfig.current;
			if (element) {
				const styles = getComputedStyle(element, pseudoSel);
				const progressVal = parseInt(styles.getPropertyValue('--animation-progress'), 10);
				// console.log(styles.getPropertyValue('--animation-progress'));

				if (progress !== progressVal) {
					setProgress(progressVal);
				}

				animationFrameId = requestAnimationFrame(checkAnimationProgress);
			}
		};

		cancelAnimationFrame(animationFrameId);
		if (elementConfig.current.element) {
			animationFrameId = requestAnimationFrame(checkAnimationProgress);
		}

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
		
	}, [elementConfig.current, progress]);

	const setRef = useCallback((node, pseudoSel = '') => {
		if (node !== elementConfig.current.element || pseudoSel !== elementConfig.current.pseudoSel) {
			elementConfig.current = {element: node, pseudoSel};
		}
	}, []);

	return [progress, setRef];
}

export default useAnimationProgress;