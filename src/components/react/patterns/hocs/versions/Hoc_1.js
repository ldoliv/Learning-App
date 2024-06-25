import React, {useEffect, useState} from 'react';


/*
	https://medium.com/@mjackson/use-a-render-prop-50de598f11ce
*/

function Mouse(props) {
	const [pos, setPos] = useState({x: 0, y: 0});

	function handleMouseMove(event) {
		setPos({
			x: event.clientX,
			y: event.clientY
		})
	}

	return (
		<div style={{height: '100%'}} onMouseMove={handleMouseMove}>
			{props.render(pos)}
		</div>
	)
}

function DisplayMousePos(props) {
	return (
		<div style={{border: '1px solid white'}}>
			<h1>The mouse position is ({props.pos.x}, {props.pos.y})</h1>
			<div>Extra prop: {props.someProp}</div>
		</div>
	);
}

// --------------------------------------------------------
// Hocs =>

// using a Class Component
const withMouseHoc1 = (Component) => {
	return class extends React.Component {
		render() {
			return <Mouse render={pos => (
				<Component {...this.props} pos={pos} />
			)} />
		}
	}
}


// V1 - using functional component. For understanding

const withMouseHoc2 = (Component) => {

	// destructing and capturing, 'someProp', passing on the rest of props to <Component />
	return ({someProp, ...props}) => {	// props received from the component passed to withMouseHoc2
		console.log(someProp);
		return (
			<Mouse render={pos => (
				<Component {...props} pos={pos} />
			)} />
		);
	}
}

// V2 - using functional component. Shorthand version. In a function Context a component returns it's props
// props is props set in withMouse
const withMouseHoc3 = (Component) => (props) => {
	// console.log(props);
	return (
		<Mouse render={pos => (
			<Component {...props} pos={pos} />
		)} />
	);
}

const withMouseHoc4 = (Component) => (props) => {

	const [mousePos, setMousePos] = useState({
		x: 0,
		y: 0
	});

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePos({
				x: e.clientX,
				y: e.clientY
			})
		}
		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			// console.log('unmounted');
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return <Component {...props} pos={mousePos} />
}

// -----------------------------------------------------------------------

// The component we pass is wrapped by extra functionality and a new component is returned.

// const WithMouse = withMouseHoc1(DisplayMousePos);
// const WithMouse = withMouseHoc2(DisplayMousePos);
// const WithMouse = withMouseHoc3(DisplayMousePos);
const WithMouse = withMouseHoc4(DisplayMousePos);


export default function Hocs() {
	return (
		<WithMouse someProp={'some prop value'} />
	);
}

