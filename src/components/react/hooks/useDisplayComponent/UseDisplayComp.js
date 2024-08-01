import React from "react";



/*
	Used for adding and removing a component from the dom, allowing for css animations with the use of a delay

	order:
		if show == true
			1. sets render = true
			2. after delayAfterRender then sets visible = true
		else
			1. sets visible = false
			2. after delayBeforeRemove then sets render = false
*/

function useDisplayComponent(opts) {

	const [render, setRender] = React.useState(false);
	const [visible, setVisible] = React.useState(false);

	const defaults = {
		show: false,
		delayAfterRender: 0,
		delayBeforeRemove: 0
	};
	let options = typeof opts === 'function' ? opts() : opts;
	options = {...defaults, ...options};

	
	// React.useEffect(() => {
	React.useLayoutEffect(() => {

		let timerDelayBeforeDisplay;
		let timerDelayBeforeRemove;
		
		// render component
		if (options.show) {
			setRender(true);

			// after component has rendered add 'opened' class for animation
			timerDelayBeforeDisplay = setTimeout(() => {
				setVisible(true)
			}, options.delayAfterRender);

		} else {

			setVisible(false)

			// When closing, if the component is opened, set render to false after delayBeforeRemove
			timerDelayBeforeRemove = setTimeout(() => {
				setRender(false)
			}, options.delayBeforeRemove);

		}

		return () => {
			clearTimeout(timerDelayBeforeDisplay);
			clearTimeout(timerDelayBeforeRemove);
		}

	}, [options.show]);


	return [render, visible];
}