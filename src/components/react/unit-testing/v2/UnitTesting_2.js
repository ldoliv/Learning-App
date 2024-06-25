import React from 'react'
import FeedbackForm from './FeedbackForm'
import './App.css';

export default function UnitTesting_2() {

	function handleSubmit({score, comment}) {
		console.log('Form submited');
	}

	return (
		<FeedbackForm onSubmit={handleSubmit}/>
	)
}
