import Answer from 'components/global/Challenge';



function unique(value: number, index: number, self: number[]) {
	return self.indexOf(value) === index;
}

// function getMissing(A: number[]) {

// 	const uniqueVals = A.filter(unique);
// 	uniqueVals.sort();

// 	// console.log(uniqueVals);


// 	let next = 1;

// 	for (let i = 0; i < uniqueVals.length - 1; i++) {
// 		const expectedNext = uniqueVals[i] + 1;
// 		next = uniqueVals[i + 1];

// 		if (expectedNext != next && expectedNext > 0) {
// 			return expectedNext
// 		}
// 	}

// 	return next > 0 ? next + 1 : 1;
// }

function getMissing_v2(A: number[]) {

	// const values = A.filter(n => n > 0).sort();
	const values = A.filter((val, idx, arr) => arr.indexOf(val) === idx && val > 0).sort();
	console.log(values);

	if (!values.length) {
		return 1;
	}

	// you view "x" as the expected next. It starts out as the mininum value
	let expected = values[0];

	for (let i = 0; i < values.length; i++) {

		const current = values[i];
		
		console.log(expected, current, expected < current);

		// if expected is smaller than the next value, means that it's the one that's missing
		if (current > expected) {
			return expected
		}
		expected = current + 1
	}

	return expected
}

/*
	2 > 2  false
	3 > 3  false
	4 > 4  false
	6 > 5  true <-
*/


export default function SampleChallenge() {

	const sets = [
		{
			// input: [1, 3, 6, 4, 1, 2, 1],
			input: [3, 6, 4, 2, 3],
			output: 5
		},
		{
			input: [1, 2, 3],
			output: 4
		},
		{
			input: [-1, -3],
			output: 1
		},
	]


	return (
		<Answer
			title='Codility sample challenge'
			descp={<>
				<p>Given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.</p>
				<p>For example, given A =[1, 3, 6, 4, 1, 2], the function should return 5.</p>
				<p>Given A = [1, 2, 3], the function should return 4.<br />Given A = [−1, −3], the function should return 1.</p>
			</>}
			result={
				sets.map((set, i) => {
					const output = getMissing_v2(set.input);
					const passed = set.output === output;
					return <p key={i}>input: [{set.input.join(', ')}], output: {output}, expected: {set.output}, result: <span style={{
						color: passed ? 'green' : 'red',
					}}>{passed ? 'Passed' : 'Failed'}</span></p>
				})
			}
		/>
	)
}