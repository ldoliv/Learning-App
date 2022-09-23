

export function randomNumber(mNum) {

	console.log('Initialized Random Number generator with: %o', mNum);

	const maxNum = mNum;
	let chosen = [];

	function getRandomInt(max) {
		return Math.round(Math.random() * max);
	}

	function get() {

		console.log('maxNum', maxNum);

		let index = null;

		// generate index that hasn't yet ocurred
		do {
			index = getRandomInt(maxNum);
			// console.log(chosen);
		} while (chosen.includes(index) && chosen.length <= maxNum);


		// if diference is 1, then reset with current index, becomes the index in the new set
		if ((maxNum + 1) - chosen.length === 1) {
			chosen = [index];

			// add index to chosen array
		} else if (chosen.length <= maxNum) {
			chosen.push(index);
		}

		// console.log(chosen);
		// console.log('');

		return index;
	}

	function getProgress() {
		return Math.floor(chosen.length / (maxNum + 1) * 100);
	}

	return {
		get,
		getProgress
	}

}


export function getTags(questions) {
	return questions.reduce((tags, quest) => {
		quest.tags.forEach(qTag => {
			// if (!tags.some(tag => tag === qTag)) {
			if (!tags.includes(qTag)) {
				tags.push(qTag)
			}
		});
		return tags;
	}, []);
}

