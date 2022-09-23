import {render, screen} from '@testing-library/react';
import Button from "../Button";

// import React from "react";
// import ReactDOM from 'react-dom/client';
// import 'jest-dom/extend-expect';


/*
	1. render component
	2. display output in console
	3. grab element
	4. do assertion
*/

test('Check if button is in the DOM', () => {

	const testId = "button1";
	render(<Button id={testId}>click me please</Button>);

	// screen.debug();	// show render output in console

	expect(screen.getByTestId(testId)).toBeInTheDocument();		// checks whether the element is in the DOM
})


test('Check if button has text', () => {
	
	const testId = "button1";
	render(<Button id={testId}>click me please</Button>);

	// screen.debug();	// show render output in console

	expect(screen.getByTestId(testId)).toHaveTextContent('click me please');
})


test('Test if element is not in the DOM', () => {

	const testId = "button1";
	render(<Button id={testId}>click me please</Button>);

	// screen.debug();	// show render output in console

	// expect(screen.queryByTestId('abcd')).toBeNull();
	expect(screen.queryByTestId('abcd')).not.toBeInTheDocument();
})

