import React from 'react'



/*
	https://levelup.gitconnected.com/devmade-curry-ing-powder-recipe-in-functional-programming-c6e0e45cfbae
*/


function sum(a: number, b: number) {
	return a + b;
}

function basicCurriedSum(a: number) {
	return (b: number) => {
		return a + b;
	}
}


function curry(func: Function) {

	return function curried(this: any, ...args: any[]) {

		// if the number of arguments passed is greater or equal to the number of arguments the function accepts, apply those arguments to the function
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {

			// if arguments are insufficient concatenate them until they become suficient, where it then enters the 1st part of the if and the arguments are applied to the function
			return (...args2: any[]) => {
				return curried.apply(this, args.concat(args2));
			}
		}
	};
}


export default function Currying() {

	const sum1 = sum(2, 3)
	const sum2 = basicCurriedSum(2)(3);

	const curriedSum = curry(sum);

	const sum3 = curriedSum(2, 3);
	const sum4 = curriedSum(2)(3);

	return (
		<>
			<div>{`sum(2, 3) -> ${sum1}`}</div>
			<div>{`basicCurriedSum(2, 3) -> ${sum2}`}</div>
			<div>----------</div>
			<div>{`curriedSum(2, 3) -> ${sum3}`}</div>
			<div>{`curriedSum(2)(3) -> ${sum4}`}</div>
		</>
	)
		
}

