
const isNumber = (numb) => isNaN(numb) ? false : true;


function operation(a, b, operator) {
	const valA = (a == null || isNaN(a)) ? 0 : parseInt(a);
	const valB = (b == null || isNaN(b)) ? 0 : parseInt(b);
	let result;

	if (operator === '+') {
		result = valA + valB;
	} else if (operator === '-' && valA !== 0) {
		result = valA - valB;
	} else {
		result = valB;
	}

	console.log('result: %o', result);
	return result.toString();
}

function calculate(globalState, buttonValue) {

	console.log('currentState: %o', globalState);


	if (isNumber(buttonValue)) {

		if (globalState.next) {
			return {
				...globalState,
				next: globalState.next === '0' ? buttonValue : globalState.next + buttonValue
			}

		} else {
			return {
				...globalState,
				next: buttonValue
			}
		}

	} else {

		if (buttonValue === 'CLEAR') {
			return {
				total: null,
				next: null,
				operation: null
			}

		} else if (buttonValue === 'RESULT') {

			if (globalState.next && globalState.operation) {
				return {
					total: operation(globalState.total, globalState.next, globalState.operation),
					next: null,
					operation: null
				}
			} else {
				return globalState
			}


		} else if (buttonValue === '+') {

			if (globalState.next) {
				return {
					next: null,
					operation: buttonValue,
					total: operation(globalState.total, globalState.next, buttonValue),
				}
			} else {
				return {
					...globalState,
					operation: buttonValue
				}
			}

		} else if (buttonValue === '-') {
			if (globalState.next) {
				return {
					next: null,
					operation: buttonValue,
					total: operation(globalState.total, globalState.next, buttonValue),
				}
			} else {
				return {
					...globalState,
					operation: buttonValue
				}
			}
		}

	}
}

export default calculate;