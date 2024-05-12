import Answer from 'components/global/Challenge';



function getNextPositiveInt(arr: number[] ) {

	// filter out negative numbers and sort the array
	const unique = arr
		.filter((val, index, arr) => arr.indexOf(val) === index && val > 0)
		.sort((a, b) => a - b);

	// console.log(arr);
	// console.log(unique);
	if (!unique.length)
		return 1;

	// this part deals with the sequence of numbers and returns the correct next number
	for (let i = 1; i < unique.length; i++) {
		if (unique[i] !== (unique[i - 1] + 1))
			return unique[i - 1] + 1;
	}
	// if not found within the sequence return the last number + 1
	return unique[unique.length - 1] + 1;
}


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
		{
			input: [-1, -3, 0],
			output: 1
		},
	]


	return (
		<Answer
			title='Codility sample challenge'
			descp={<>
				<p>Given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.</p>
				<p>For example, given A =[1, 3, 6, 4, 1, 2], the function should return 5.</p>
				<p>Given A = [1, 2, 3], the function should return 4.<br />Given A = [-1, -3], the function should return 1.</p>
			</>}
			result={
				sets.map((set, i) => {
					const output = getNextPositiveInt(set.input);
					const passed = set.output === output;
					return <p key={i}>input: [{set.input.join(', ')}], output: {output}, expected: {set.output}, result: <span style={{
						color: passed ? 'green' : 'red',
						// backgroundColor: 'white',
						// padding: '1px 3px',
					}}>{passed ? 'Passed' : 'Failed'}</span></p>
				})
			}
		/>
	)
}