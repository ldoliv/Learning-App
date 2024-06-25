import {fireEvent, render, screen, queryByAttribute} from "@testing-library/react";
import FeedbackForm from "../FeedbackForm";

// You can use the chrome extension Testing Playground to see the best method to use to get an element. Panel shows in devtools
// https://chromewebstore.google.com/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano


const getById = queryByAttribute.bind(null, 'id');						// 👈

describe("Feedback Form", () => {
	test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
		const score = "3";
		const comment = "The pizza crust was too thick";

		// Mock handleSubmit and render the FeedbackForm component
		const handleSubmit = jest.fn();
		const {container} = render(<FeedbackForm onSubmit={handleSubmit} />);

		// get the range input field and set the value
		// const rangeInput = screen.getByRole('slider');				// 👈 3 ways to get the element
		// const rangeInput = container.querySelector('#score');		// 👈
		const rangeInput = getById(container, 'score');					// 👈

		fireEvent.change(rangeInput, {target: {value: score}});

		// get the comment input field and set the value
		const commentInput = getById(container, 'comment');

		fireEvent.change(commentInput, {target: {value: comment}});

		// get submit button and fire click event
		const submitButton = screen.getByRole('button');
		fireEvent.click(submitButton);

		// You have to write the rest of the test below to make the assertion pass
		expect(handleSubmit).toHaveBeenCalledWith({
			score,
			comment,
		});
	});

	test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
		const score = "9";
		const handleSubmit = jest.fn();
		const {container} = render(<FeedbackForm onSubmit={handleSubmit} />);

		// get range input and set value
		const rangeInput = getById(container, 'score');				// 👈
		fireEvent.change(rangeInput, {target: {value: score}});			

		// get submit button and fire click event
		const submitButton = screen.getByRole('button');
		fireEvent.click(submitButton);

		// You have to write the rest of the test below to make the assertion pass

		expect(handleSubmit).toHaveBeenCalledWith({
			score,
			comment: "",
		});
	});
});
