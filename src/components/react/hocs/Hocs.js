import React, {useState} from 'react';


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
		<>
			<h1>The mouse position is ({props.mouse.x}, {props.mouse.y})</h1>
			<div>Extra prop: {props.someProp}</div>
		</>
	);
}

// using class component
const withMouseHoc1 = (Component) => {
	return class extends React.Component {
		render() {
			return <Mouse render={mouse => (
				<Component {...this.props} mouse={mouse} />
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
			<Mouse render={mouse => (
				<Component {...props} mouse={mouse} />
			)} />
		);
	}
}

// V2 - using functional component. Shorthand version. In a function Context a component returns it's props
// props is props set in withMouse
const withMouseHoc3 = (Component) => (props) => {
	// console.log(props);
	return (
		<Mouse render={mouse => (
			<Component {...props} mouse={mouse} />
		)} />
	);
}

// The component we pass is wrapped by extra functionality and a new component is returned.

// const WithMouse = withMouseHoc1(DisplayMousePos);
// const WithMouse = withMouseHoc2(DisplayMousePos);
const WithMouse = withMouseHoc3(DisplayMousePos);


export function Hocs() {
	return (
		<WithMouse someProp={'some prop value'} />
	);
}

