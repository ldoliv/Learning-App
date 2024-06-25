import React from 'react';


// This is how it would look like if the component with the added functionality exposes it through render props.


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

// Component with the added functionality, uses Render props
function Toggleable(props) {
	const [show, setShow] = React.useState(false);

	function toggle() {
		setShow(!show);
	}

	return (
		<>
			<div>hello</div>
			{props.children(show, toggle)}
		</>
	)
}

// See render-props/versions/Render_2.js for render props.


// HOC
function withToggleable(Comp) {
	return (props) => {	// returns a function
		return (		// equivalent class render method
			<Toggleable>
				{(show, onClick) => {
					const {children, ...rest} = props;	// extract children so we can apply conditional logic to it

					return (
						<Comp {...rest} onClick={onClick}>
							{show ? children : null}
						</Comp>
					)
				}}
			</Toggleable>
		)
	}
}

const ToggleableMenu = withToggleable(Menu);



export default function App() {
	return (
		<ToggleableMenu title="menu item">
			<div>sub menu item</div>
		</ToggleableMenu>
	)
}