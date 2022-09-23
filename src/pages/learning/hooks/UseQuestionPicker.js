import React from "react";
import { randomNumber } from "helpers";


const initialState = () => ({
	index: null,
	question: null,
	showAnswer: false
});


export default function useQuestionPicker(questions = []) {

	const [picked, setPicked] = React.useState(initialState);
	const generator = React.useRef();
	

	React.useEffect(() => {
		generator.current = randomNumber(questions.length - 1);
		setPicked(initialState())
	}, [questions])


	 // Only update the random number generator when total questions change
	// const generator = React.useMemo(() => {
	// 	return randomNumber(questions.length - 1);
	// }, [questions]);

	
	function pick() {
		const qIndex = generator.current.get();
		const progress = generator.current.getProgress();
		// console.log('qIndex: %o', qIndex);

		setPicked({
			index: qIndex + 1,
			question: questions[qIndex],
			showAnswer: false,
			progress
		});
	}

	function showAnswer() {
		setPicked(prevState => {
			if (prevState.question !== null) {
				return {
					...prevState,
					showAnswer: true,
				}
			}
		})
	}

	
	return [picked, pick, showAnswer];
}