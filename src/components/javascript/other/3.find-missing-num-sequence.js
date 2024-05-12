

function findMissing(arr) {

	arr.sort((a, b) => a - b);

	for (let j = 0; j < arr.length; j++) {
		if (j > 0 && arr[j] !== (arr[j - 1] + 1)) {
			return arr[j - 1] + 1;
		}
	}

	// for (let i = 0, {length} = arr; i < length - 1; i++) {
	// 	const expectedNext = arr[i] + 1;
	// 	if (expectedNext !== arr[i + 1]) {
	// 		return expectedNext;
	// 	}
	// }
}


export default function runFindMissing() {

	// const arr = [2, 3, 4, 7, 11];
	const arr = [4, 5, 6, 8];
	const result = findMissing(arr);

	return (
		<>
			<div>Find Missing: [{arr.join(', ')}] = {result}</div>
		</>
	)

}