import React from 'react';


class RenderProp1 extends React.Component {
	render() {
		// handling a component
		return (
			<div>
				<this.props.render value='value passed to render prop function' />
			</div>
		);
	}
}

class RenderProp2 extends React.Component {
	render() {
		// handling a function
		return (
			<div>
				{this.props.render('value passed to render prop function')}
			</div>
		);
	}
}

class RenderProp3 extends React.Component {
	render() {
		// children as a function
		return (
			<div>
				{this.props.children('value passed to children prop function')}
			</div>
		)
	}
}


export default class RenderProps extends React.Component {

	constructor (props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				{/* passing a component */}
				<RenderProp1 render={({value}) => {
					return <div>{value}</div>
				}} />

				{/* passing a function */}
				<RenderProp2 render={value => {
					return <div>{value}</div>
				}} />

				{/* children as a function */}
				<RenderProp3>
					{value => {
						return <div>{value}</div>
					}}
				</RenderProp3>
			</>
		)
	}
}

// ========================================



