import React, {memo, useEffect, useRef, useState} from "react";
import ReactDOM, {createPortal} from "react-dom";




function Modal() {
	// The click event on this button will bubble up to parent,
	// because there is no 'onClick' attribute defined
	return (
		<div className="modal d-flex justify-content-center align-items-center" style={{
			height: '240px',
			backgroundColor: '#efefef',
			top: '220px'
		}}>
			<button>Click</button>
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



export class Portals extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			id: 'first-location',		// 1. Moves from here
			clicks: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({id: 'second-location'})		// 2. To here
		}, 3000)

		setTimeout(() => {
			this.setState({id: 'third-location'})		// 3. To here
		}, 8000)
	}

	handleClick() {
		// This will fire when the button in Child is clicked,
		// updating Parent's state, even though button
		// is not a direct descendant in the DOM.
		this.setState(state => ({
			clicks: state.clicks + 1
		}));
	}

	render() {

		// console.log(this.state.element);

		return (
			<>
				<div id="second-location"></div>

				<div onClick={this.handleClick}>
					<p>Number of clicks: {this.state.clicks}</p>
					<p>Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler.</p>

					<Portal id={this.state.id}>
						<Modal />
					</Portal>
				</div>
			</>
		);
	}
}

