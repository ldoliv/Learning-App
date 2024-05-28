import React, {useEffect} from "react";
import {configureStore} from '@reduxjs/toolkit';
import {connect, Provider, useDispatch, useSelector} from 'react-redux';


/*
	Key takeaway:
		Exposes only part of the state to a component through the "connect" function, does this by:
		Passing specific props that allows managing part of the state:
			mapStateToProps - exposes part of the state through props	<- state
			mapDispatchToProps - exposes functions to manage part of the state	<- actions
*/

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
	return {
		type: ADD,
		message: message
	}
};

const defaultState = [];

const messageReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD:
			return [
				...state,
				action.message
			];
		default:
			return state;
	}
};


const store = configureStore({
	reducer: messageReducer,
});


// Change code below this line
class Presentational extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			input: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitMessage = this.submitMessage.bind(this);
		console.log(this);
	}
	handleChange(event) {
		this.setState({
			input: event.target.value
		});
	}
	submitMessage() {
		this.props.submitNewMessage(this.state.input);		// <- manage part of the state
		this.setState((state) => ({
			input: '',
		}));
	}
	render() {
		return (
			<div>
				<h2>Type in a new Message:</h2>
				<input
					value={this.state.input}
					onChange={this.handleChange} /><br />
				<button onClick={this.submitMessage}>Submit</button>
				<ul>
					{this.props.messages.map((message, idx) => {		// <- a part of the state
						return (
							<li key={idx}>{message}</li>
						)
					})
					}
				</ul>
			</div>
		);
	}
};
// Change code above this line

const mapStateToProps = (state) => {
	return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
	return {
		submitNewMessage: (message) => {
			dispatch(addMessage(message))
		}
	}
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default class AppWrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Container />
			</Provider>
		);
	}
};