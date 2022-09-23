import React from 'react';


class BuggyCounter extends React.Component {

	constructor (props) {
		console.log('buggy constructor()');
		super(props);
		this.state = {counter: 0};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(({counter}) => ({
			counter: counter + 1
		}));
	}

	render() {
		console.log('buggy render()');
		if (this.state.counter === 5) {
			throw new Error('I crashed!');
		}
		return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
	}
}

export default BuggyCounter;