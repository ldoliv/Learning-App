

export default function runTs() {

	// type Person = {
	// 	name: string,
	// 	age: number
	// }

	interface Person {
		name: string,
		age: number
	}


	function logPersonDetails(person: Person) {
		console.log(`Name: ${person.name}, Age: ${person.age}`);
	}


	const person = {
		name: 'John',
		age: 36,
		height: 1.8
	}

	logPersonDetails(person)

}