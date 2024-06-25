import React, {useState, useContext} from 'react';


// Adds toggleable functionality to an existing Menu comp

// Using class comp
const withToggleable = (Comp) => {
	return class extends React.Component {

		constructor(props) {
			super(props);
			this.state = {
				show: false
			};
			this.toggle = this.toggle.bind(this);
		}

		toggle() {
			console.log('toggle');
			this.setState(prevState => ({show: !prevState.show}))
		}

		render() {
			const {children, ...rest} = this.props;

			return (
				<Comp {...rest} onClick={this.toggle}>
					{this.state.show && children}
				</Comp>
			)
		}
	}
}

// Using a function component !!! 😈
const withToggleableFC = (Comp) => {
	return (props) => {		// must be like this with the word "function" and capital letter for the function
		const [show, setShow] = useState(false);

		const toggle = () => setShow(show => !show);

		const {children, ...rest} = props;

		return (
			<Comp {...rest} onClick={toggle}>
				{show && children}
			</Comp>
		)
	}
}

function Menu(props) {
	return (
		<>
			<h3 onClick={props.onClick}>{props.title}</h3>
			{props.children && <ul>{React.Children.map(props.children, (child, idx) => {
				return <li key={idx}>{child}</li>
			})}</ul>}
		</>
	)
}

// const ToggleableMenu = withToggleable(Menu);
const ToggleableMenu = withToggleableFC(Menu);


export default function Hocs() {
	return (
		<>
			<h2 className='mb-3'>Normal menu</h2>
			<Menu title="menu item">
				<div>sub menu item</div>
			</Menu>
			
			<div>--------------------------</div>
			
			<h2 className='mb-3'>Toggleable menu</h2>
			<ToggleableMenu title="menu item">
				<div>sub menu item</div>
			</ToggleableMenu>
		</>
	);
}

