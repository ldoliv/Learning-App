import React from 'react';




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

// Render props children as a function
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

// See hocs/versions/Hoc_3.js for a HOC version with render props

// called Composition => ?

function ToggleableMenu(props) {
	return (
		<Toggleable>
			{(show, onClick) => {
				const {children, ...rest} = props;

				return (
					<Menu {...rest} onClick={onClick} >
						{show ? children : null}
					</Menu>
				)
			}}
		</Toggleable>
	)
}


export default function App() {
	return (
		<ToggleableMenu title="menu item">
			<div>sub menu item</div>
		</ToggleableMenu>
	)
}