import React from 'react';


class RenderPropFunc extends React.Component {

	render() {

		// handling a funciton

		// return (
		// 	<div>
		// 		{this.props.render('value passed to render prop function')}
		// 	</div>
		// );

		// handling a component
		return (
			<div>
				<this.props.render value='value passed to render prop function' />
			</div>
		);
	}
}

class RenderChildPropFunc extends React.Component {

	render() {
		return (
			<div>
				{this.props.children('value passed to children prop function')}
			</div>
		)
	}
}

export class RenderProps extends React.Component {

	constructor (props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				{/* passing a function */}
				{/* <RenderPropFunc render={value => {
					return <div>{value}</div>
				}} /> */}

				{/* passing a component */}
				<RenderPropFunc render={({value}) => {
					return <div>{value}</div>
				}} />

				<RenderChildPropFunc>
					{value => {
						return <div>{value}</div>
					}}
				</RenderChildPropFunc>
			</>
		)
	}
}

// ========================================



