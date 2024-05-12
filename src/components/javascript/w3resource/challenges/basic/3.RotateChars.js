import {useState, useEffect} from "react";



const newWord = (word) => {
	const letters = word.split('');
	const last = letters.pop();
	letters.unshift(last);
	return letters.join('');
}

const newWord2 = (word) => {
	return word.slice(-1) + word.slice(0, -1);
}


export default function RotateWord() {

	const [word, setWord] = useState('w3resource');


	/*
		Two ways to use useEffect, the first by using a normal setInterval, but we need to set it as a function, getting the current value of 'word', otherwise it will always be the same.
	*/
	useEffect(() => {

		const timer = setInterval(() => {
			setWord(word => newWord2(word));		// <- needs to get the current value
		}, 1000)

		return () => {
			clearInterval(timer);
		}
	}, [])

	/*
		The other way to make the word change is to use setTimeout just for the 1 second delay, no need to pass a function to setWord, 'word' has
		to be added to the useEffect dependency array for it to be called again when 'word' changes.
	*/
	// useEffect(() => {

	// 	const timer = setTimeout(() => {
	// 		setWord(newWord2(word));
	// 	}, 1000)

	// 	return () => {
	// 		clearTimeout(timer);
	// 	}
	// }, [word])

	return (
		<div>{word}</div>
	)
}