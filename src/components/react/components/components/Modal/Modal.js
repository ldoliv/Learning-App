import React, {useState, useEffect, useRef, memo} from 'react';
import {createPortal} from "react-dom";
import './Modal.styles.scss';


// Dynamic Portal
// https://medium.com/@jc_perez_ch/dynamic-react-portals-with-hooks-ddeb127fa516

const Portal = memo(({parentSelector, children}) => {

	const container = useRef(document.querySelector(parentSelector) || document.createElement('div'));

	// dynamic is true if the element is created, because it will have no parent
	const [created] = useState(!container.current.parentElement);

	useEffect(() => {

		// if the element was created append to body
		if (created) {
			container.current.id = 'portal-container';
			document.body.appendChild(container.current);
		}

		return () => {
			if (created && container.current.parentElement) {
				container.current.parentElement.removeChild(container.current);
			}
		}
	}, [parentSelector])

	return createPortal(children, container.current);
});

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



export function ModalV2({isOpen, title, content, className = 'info', parentSelector, ignoreOverlayClick, onClose, delayAfterRender, delayBeforeRemove}) {

	const modalId = 'cs-modal';

	const [render, visible] = useDisplayComponent(() => ({
		show: isOpen,
		delayAfterRender: delayAfterRender ? delayAfterRender : 100,
		delayBeforeRemove: delayBeforeRemove ? delayBeforeRemove : 500
	}));
	// const [render, visible] = useDisplayComponent({
	// 	show: isOpen,
	// 	delayAfterRender: delayAfterRender ? delayAfterRender : 100,
	// 	delayBeforeRemove: delayBeforeRemove ? delayBeforeRemove : 500
	// });

	
	function handleCloseOverlay() {
		if (!ignoreOverlayClick) {
			onClose();
		}
	}

	
	if (!render) return null;
	
	const modal = (
		<div id={modalId} className={`cs-modal ${className} ${visible ? 'opened' : ''}`} >
			<div className="overlay" onClick={handleCloseOverlay}></div>
			<div className="cs-modal-outer">
				<div className="cs-modal-close" onClick={() => onClose()}></div>
				{title && <div className="cs-modal-title mb-2">{title}</div>}
				<div className="cs-modal-content">{content}</div>
			</div>
		</div>
	)

	if (parentSelector) {
		return (
			<Portal parentSelector={parentSelector}>
				{modal}
			</Portal>
		)
	} else {
		return modal
	}
}