import React, {useEffect, useState, useRef} from "react"


// 3h:19

// 	To test just uncomment, as typescript checker runs in the IDE VSCode



function addNumbers(a: number, b: number): string {
	return (a + b).toString();
}

function addNumbers2(a, b) {
	return (a + b).toString();
}

const numbers = [1, 2, 3]
const letters = ['a', 'b', 'c']
const mixed = [1, 'a', 2, 'b']


letters.map((letter): number => {
	return `letter: ${letter}`
})


const user = {
	name: 'Leo',
	age: 20
};

type User = typeof user & {
	readonly prefs: string[];
}

// -----------------------------------------------------------------

const user2: User = {
	name: 'John',
	age: 30,
	prefs: ['a', 'b', 'c']
}

user2.prefs.push('d')

// -----------------------------------------------------------------

type Person = number[]

const person: Person = [3]

// -----------------------------------------------------------------
// Tuples

type person2T = ['aaa', 111];

const person2: person2T = ['aaa', 111]




export function App() {
	return (
		<div>Typescript</div>
	)
}
