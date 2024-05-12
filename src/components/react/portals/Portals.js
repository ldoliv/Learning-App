import React, {memo, useEffect, useRef, useState} from "react";
import ReactDOM, {createPortal} from "react-dom";




function Modal(props) {
	// The click event on this button will bubble up to parent,
	// because there is no 'onClick' attribute defined
	return (
		<div className="modal d-flex justify-content-center align-items-center" style={{
			height: '240px',
			border: '1px solid #efefef',
			top: '220px'
		}} onClick={(e) => props.onClick(e)}>
			<div>Child component</div>
		</div>
	);
}


// Dynamic Portal
// https://medium.com/@jc_perez_ch/dynamic-react-portals-with-hooks-ddeb127fa516

const Portal = memo(({id, children}) => {

	const el = useRef(document.getElementById(id) || document.createElement('div'));

	const [, triggerUpdate] = useState(false);

	
	useEffect(() => {

		el.current = document.getElementById(id) || document.createElement('div');
		const created = !el.current.parentElement;
		

		// if the element was created append to body
		if (created) {
			el.current.id = id || 'portal-container';
			document.body.appendChild(el.current);
		}

		// set state so that createPortal() can be called with the updated el.current value
		triggerUpdate(prevState => !prevState);

		return () => {
			console.log('useEffect unload callback - created value: %o', created);

			// if it was created and now has a parent, meaning that it's in the dom
			if (created && el.current.parentElement) {
				el.current.parentElement.removeChild(el.current);
			}
		}

	}, [id])
	
	return createPortal(children, el.current);
});

const ids = ['first-location', 'second-location', 'third-location'];

export class Portals extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			id: 'first-location',
			clicks: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {

	}

	handleClick() {
		// Updates the Parent's state, even though button
		// is not a direct descendant in the DOM.
		this.setState(state => ({
			clicks: state.clicks + 1,
			id: ids[state.clicks % 3]
		}));
	}

	render() {

		// console.log(this.state.element);

		return (
			<>
				<div>location: {this.state.id}</div>
				<div id="second-location"></div>

				<div>
					<p>Number of clicks: {this.state.clicks}</p>
					<p>Open the browser DevTools and observe that the Child(Modal) might not be a descendent of the Parent component in the dom. And still the parent component is able to capture the onClick event.</p>

					<Portal id={this.state.id}>
						<Modal onClick={this.handleClick} />
					</Portal>
				</div>
			</>
		);
	}
}

