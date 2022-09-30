

function sumFor(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

function sumRecursive(n) {
	if (n > 1) {
		return n + sumRecursive(n - 1);
	} else {
		return n;
	}
}

function sumFormula(n) {
	return n * (n + 1) / 2;
}




export default function runSum() {

	const num = 10;

	const result2 = sumFor(num);
	const result = sumRecursive(num);
	const result3 = sumFormula(num);

	return (
		<>
			<div>sumFor(10) = {result2}</div>
			<div>sumRecursive(10) = {result}</div>
			<div>sumFormula(10) = {result3}</div>
		</>
	)

} 