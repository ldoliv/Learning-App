
/*
	Part of 
	https://kentcdodds.com/blog/inversion-of-control
	with my own twist

	Key takeaways:
	1. Control is external, we can pass in as many filter functions as we want, without having to modify the filter function itself
*/


// Higher Order Function
// Reducer that returns true if at least 1 of the validators is true
function reducer(...validators) {
	return (element) => {
		// return validators.reduce((acc, validator) => acc || validator(element), false)
		return validators.some(validator => validator(element))
	}
}

// let's pretend that Array.prototype.filter does not exist
function filter(array, reducer = () => {}) {
	
	let newArray = []
	for (let index = 0; index < array.length; index++) {
		const element = array[index]

		// we only want to add to the valid elements if the condition is false
		if (!reducer(element)) {
			newArray.push(element)
		}
	}
	return newArray
}

const filterNull = element => element === null;
const filterUndefined = element => element === undefined;
const filterEmptyString = element => element === '';
const filterZero = element => element === 0;


export default function InversionControl() {

	const data = [0, 1, undefined, 2, null, 3, 'four', ''];

	const control = reducer(filterNull, filterUndefined, filterEmptyString, filterZero);

	const result = filter(data, control);

	// console.log(result);
	// [0, 1, 2, 3, 'four', '']

	return (
		<>
			<div>{`filter([0, 1, undefined, 2, null, 3, 'four', ''])`}</div>
			<div>{`[${result.map(item =>
				item === ''
					? '""'
					: item === undefined
						? 'undefined'
						: item === null
							? 'null'
							: typeof item === 'string'
								? `"${item}"`
								: item
			).join(', ')}]`}</div>
		</>
	)
}