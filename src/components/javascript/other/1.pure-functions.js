
export default function pureFunctions() {

	let initialValue = 10;

	/*
		IMPURE FUNCTION
		This is an impure function its return value is dependent on a variable outside of itself
	*/
	const impure1 = (newValue) => {
		return initialValue + newValue;
	}

	const impData1 = impure1(5);


	/*
		IMPURE FUNCTION
		This is an impure function its modifying a variable outside of its scope
	*/
	var getInitialValue = 3;

	function impure2(inputValue) {
		getInitialValue = inputValue;
		return getInitialValue;
	}

	const impData2 = impure2(5);



	/*
		PURE FUNCTION
	*/
	function addData(firstInput, secondInput) {
		return firstInput + secondInput;
	}

	const data = addData(1, 2);


	return (
		<>
			<div>Impure function result: {impData1}</div>
			<div>Impure function result: {impData2}</div>
			<div>Value modified by impure2(): {getInitialValue}</div>
			<div>Pure function result: {data}</div>
		</>
	)


}