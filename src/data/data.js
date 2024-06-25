let questions = [
	{
		quest: "Differences, similarities between Redux and Context api with useReducer hook",
		answ: {
			desc: (
				<>
					<p>Common:<br />
					actions are exported and imported in the needed files<br />
					state and dispatch is passed down through the provider</p>

					<p>Differences:<br />
					Redux provider has a "store" prop, when "store" is created it get's passed a reducer function<br />
					Context provider has a "value" prop, that can be any value, normally the state and dispatch is passed to then be consumed by descendent components</p>
				</>
			),
			code: "",
			url: "",
		},
		tags: ["React", "Redux"],
	},
	{
		quest: "Ternary operator",
		answ: {
			desc: "",
			code: "condition ? exprIfTrue : exprIfFalse",
			url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Optional Chaining",
		answ: {
			desc: "For an object that might not be defined, useful for accessing properties without throwing an error",
			code: <>{`
undefined?.something

// for functions

const options = {
	// getIndent: () => 2		// <- might not exist
}

const indent = options.getIndent?.()

			`}</>,
			url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",
		},
		tags: ["Javascript"],
	},
	{
		quest: "What are microservices?",
		answ: {
			desc: (
				<>
					<p>Microservices architecture splits large applications into smaller pieces that exist independently of each other and each one does one thing and does it well.</p>
					<p>
						&quot;Previously, we developers built applications in a way that is now known as the monolith: The project starts off
						small, then we just add something here, bolt on a new feature there. Then fast-forward a year or two and you suddenly
						have this monster of a project where you change one thing and the whole system can break. Everything is
						interconnected&quot;
					</p>
					<ul>
						<li>It's a flexible and efficient approach to building and operating software.</li>
						<li>
							Microservices architecture splits large applications into (much) smaller pieces that exist independently of each
							other.
						</li>
						<li>Each microservice, or piece of an application, does one thing and does it well.</li>
						<li>
							Microservices take a significant amount of work - i.e. what goes into building, deploying, and updating an
							enterprise application - and break that work into more manageable, efficient batches.
						</li>
					</ul>
				</>
			),
			code: "",
			url: "",
		},
		tags: ["Terminology"],
	},
	{
		quest: "How to get vertical scroll using Flexbox column layout?",
		answ: {
			desc: (
				<p>When wanting to have an inner section with scroll, set overflow: auto, and all .col above must have overflow: hidden</p>
			),
			code: "",
			url: "",
		},
		tags: ["Css"],
	},
	{
		quest: "Nullish value",
		answ: {
			desc: "In JavaScript, a nullish value is the value which is either null or undefined. Nullish values are always falsy.",
			code: "",
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Nullish coalescing operator (??)",
		answ: {
			desc: (
				<>
					<p>
						The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its
						left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
					</p>
					<p>
						This can be seen as a special case of the logical OR(||) operator, which returns the right- hand side operand if the
						left operand is any falsy
					</p>
				</>
			),
			code: (
				<>
					<p>const foo = null ?? 'default string'; <br/> -> = 'default string' </p>
					<p>
						const baz = 0 ?? 42;
						<br/>
						-> = 0
					</p>
				</>
			),
			url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Falsy",
		answ: {
			desc: "FUZNNE",
			code: "",
			url: "https://developer.mozilla.org/en-US/docs/Glossary/Falsy",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Array.prototype.splice()",
		answ: {
			desc: <>
				<p>The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.<br />Returns an array containing the deleted elements.</p>
			</>,
			code: (
				<>
					<p>splice(start, deleteCount, item1, item2, itemN)</p>
					<p>months.splice(-1, 1, 'Feb'); removes and inserts in last position</p>
				</>
			),
			url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
		},
		tags: ["Javascript"],
	},
	{
		quest: "<QtyInput onChange={(qty) => handleQtyChange(qty, index)} />",
		answ: {
			desc: "onChange receives whatever QtyInput passes it. 'index' is external",
			code: <>{`
			
// Another way of writing it would be.

function handleQtyChange(index) {
	return (qty) => {
		...
	}
}

<QtyInput onChange={handleQtyChange(index)} />
			`}</>,
			url: "",
		},
		tags: ["React"],
	},
	{
		quest: "Array.prototype.reduce()",
		answ: {
			desc: "",
			code: <>{`
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

const array1 = [1, 2, 3, 4];
const sumWithInitial = array1.reduce((prevAcum, currVal) => prevAcum + currVal, 0);
			`}</>,
			url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
		},
		tags: ["Javascript"],
	},
	{
		quest: "jsx conditionally add attributes",
		answ: {
			desc: "React is intelligent enough to omit the attribute if the value you pass to it is not truthy.",
			code: "",
			url: "",
		},
		tags: ["React"],
	},
	{
		quest: "How to add/remove an attribute to a dom element?",
		answ: {
			desc: <>
				<p>Element.setAttribute(name, value), the value is converted into a string.<br />If you want to remove an attribute use removeAttribute</p>
			</>,
			code: null,
			url: "",
		},
		tags: ["Javascript", "New"],
	},
	{
		quest: "Number.isInteger()",
		answ: {
			desc: "Checks if the value passed is of type number and without decimal points",
			code: "",
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "useCallback vs useMemo",
		answ: {
			desc: (
				<>
					<p>Memoization</p>
					<p>
						<i>
							In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs
							by storing the results of expensive function calls and returning the cached result when the same inputs occur
							again.
						</i>
					</p>
					<p>
						In short, it is the process of caching the result of a function, and returning the cached value for subsequent
						requests.
					</p>
					<p>
						Those two hooks have the same goal in a react component, which is memoization of values, the big difference is the
						kind of value that will be memorized.
					</p>
					<p>
						The useCallback returns a memoized callback <b>function</b> and the useMemo returns a memoized <b>value</b>.
					</p>
					<p>&nbsp;</p>
					<p>
						The function passed to useMemo runs during rendering and will memoize the <b>value</b> returned from that function
						(each time the array of dependencies change) and in the useCallback returns a <b>function</b> uncalled each time the
						array of deps change, so you can call it later (or not).
					</p>
					<p>Use useCallback for saving a reference to the function to be called at a later time.</p>
					<p>Use useMemo for expensive calculations, the function runs once and its result is saved for later use.</p>
					<p>&nbsp;</p>
					<p>The reason for using these functions is so that it prevents running the functions each time the component rerenders as well as they provide a stable value or function reference that can be passed to child components as props, and with the use of React.memo on child components we prevent them from rerendering.</p>
				</>
			),
			code: "",
			url: "https://javascript.plainenglish.io/react-hooks-the-ultimate-guide-usecallback-usememo-d68516b0767c",
		},
		tags: ["React"],
	},
	{
		quest: "memo, useCallback, useMemo use cases",
		answ: {
			desc: (
				<>
					<p>Essentially to stop extra processing on each render as well as preventing child component rerenders.</p>
					<p>
						For the case where you have a parent and child components, where the child receives a function as a prop, but we
						don't want the child to rerender everytime, we can use <b>React.memo</b> on the child component, but this still won't
						prevent the child from rerendering everytime the parent updates its state, because Objects, arrays and functions on
						every rerender they will have a new reference.
					</p>
					<p>&nbsp;</p>
					<p>To stop a child component from rerendering. The first measures to take:</p>
					<ul>
						<li>1. Use the HOC React.memo on the child component on export</li>
						<ul>
							<li>If all props are primitives, there is nothing else to do ✅</li>
						</ul>
						<li>If there are props as Objects or Arrays:</li>
						<ul>
							<li>2. Pass a comparison function as the second argument to React.memo where the object properties can be compared, return true to not render.</li>
						</ul>
						<li>If you pass a Function, Object or Array as prop:</li>
						<ul>
							<li>2. Wrap the Function, Object or Array using useMemo or useCallback on the parent component before passing it as props to the child component.</li>
						</ul>
					</ul>
					{`
Primitives are good for comparison  =>

true === true // true
false === false // true
1 === 1 // true
'a' === 'a' // true

Functions and objects have different references =>

{} === {} // false
[] === [] // false
() => {} === () => {} // false

const z = {}
z === z // true
				`}
					<p>
						To solve this we have to wrap the function with a useCallback hook, preserving the function reference passed to the
						child component.
					</p>
				</>
			),
			code: (
				<>{`
const CountButton = React.memo(function CountButton({onClick, count}) {
	return <button onClick={onClick}>{count}</button>
})

function DualCounter() {
	const [count1, setCount1] = React.useState(0)
	const increment1 = React.useCallback(() => setCount1(c => c + 1), [])

	const [count2, setCount2] = React.useState(0)
	const increment2 = React.useCallback(() => setCount2(c => c + 1), [])

	return (
		<>
			<CountButton count={count1} onClick={increment1} />
			<CountButton count={count2} onClick={increment2} />
		</>
	)
}
			`}</>
			),
			url: "https://kentcdodds.com/blog/usememo-and-usecallback",
		},
		tags: ["React"],
	},
	{
		quest: "Pure Function",
		answ: {
			desc: (
				<>
					<p>Is a function that always returns the same result for the same arguments passed</p>
					<p>Its return value is always the same for the same input values</p>
					<p>The same output for the same input</p>
					<p>A pure function does not have side-effects and its result does not depend on anything other than its inputs.</p>
					<p>A function is impure if it modifies a variable that exists outside itself</p>
				</>
			),
			code: "",
			url: "",
		},
		tags: ["Terminology"],
	},
	{
		quest: "Pure Component",
		answ: {
			desc: (
				<>
					<p>
						Pure Components in React are components which do not re-render when the value of state and props has been updated with the same values. They do a shallow comparison of state and props.
					</p>
					<p>
						For class components, you can extend from <b>React.PureCompontent</b>. <br />
						For functional compontents use <b>React.memo</b>
					</p>
					<p>A second parameter can be passed to React.memo defining the bailout of rendering condition.</p>
					<p>
						<b>React.memo only checks for prop changes</b>. If your function component wrapped in React.memo has a useState,
						useReducer or useContext Hook in its implementation, it will still rerender when state or context change.
					</p>
				</>
			),
			code: (
				<>{`
class PercentageStat extends React.PureComponent {
	render() {
		const { label, score = 0, total = Math.max(1, score) } = this.props;

		return (
		<div>
			<h6>{ label }</h6>
			<span>{ Math.round(score / total * 100) }%</span>
		</div>
		)
	}
}

-----------------------------------------

import React, { memo } from 'react';

function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
	return (
	<div>
		<h6>{ label }</h6>
		<span>{ Math.round(score / total * 100) }%</span>
	</div>
	)
}

function arePropsEqual(prevProps, nextProps) {
	return prevProps.label === nextProps.label; 
}

// Wrap component using "React.memo()" and pass "arePropsEqual"
export default memo(PercentageStat, arePropsEqual);

			`}</>
			),
			url: "",
		},
		tags: ["Terminology", "React"],
		// "tags": ["Test"]
	},
	{
		quest: "Higher Order Function",
		answ: {
			desc: "A higher order function is a function that takes a function as an argument, or returns a function, or both. .map() and .filter(), both of them take a function as an argument. They're both higher order functions.",
			code: "",
			url: "",
		},
		tags: ["Terminology", "Javascript"],
	},
	{
		quest: "Higher Order Component",
		answ: {
			desc: (
				<>
					<p>A higher-order component is a function that takes a component and returns a new component.</p>
					<p>
						<b>The component we pass is wrapped by extra functionality and a new component is returned.</b>
					</p>
					<p>It's a technique for reusing component logic.</p>
					<p>HOC can be used for many use cases:</p>
					<ul>
						<li>It's ideal for code logic reuse for example encapsulating common code when using Components that cannot be changed (3rd party)</li>
						<li>Code reuse, logic and bootstrap abstraction.</li>
						<li>Render hijacking.</li>
						<li>State abstraction and manipulation.</li>
						<li>Props manipulation.</li>
					</ul>
				</>
			),
			code: (
				<>{`
const withSomething = (Component) => (props) => {
	
	... Some extra functionality
	const newProps = {newProp: 'newpropvalue', ...props};

	return (
		<Component {...newProps} />
	);
}
			`}</>
			),
			url: "",
		},
		tags: ["Terminology", "React"],
	},
	{
		quest: "Get the name of the day of the week",
		answ: {
			desc: "",
			code: <>{`
const now = new Date();
const weekDayName = now.toLocaleDateString('en-GB', {weekday: 'long'});
console.log(weekDayName);     // 'Tuesday'
			`}</>,
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "slice()",
		answ: {
			desc: <>
				<p>The Array.prototype.slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end</p>
				<p>The String.prototype.slice() method extracts a section of a string and returns it as a new string, without modifying the original string.</p>
			</>,
			code: <>{`
slice(start, end)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

const word = 'abc';
word.slice(-1) // 'c'
word.slice(-2) // 'bc'
word.slice(-2, -1) // 'b'
			`}</>,
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Making copies of arrays or objects",
		answ: {
			desc: (
				<>
					<p>In shallow copy, you will be good ✅ if assigning a value to a variable on the first level.</p>
					<p>Be careful when making shallow copies of objects or arrays that contain objects or arrays.</p>
					<p>
						A shallow copy only creates a new reference at the first level, the references of objects or arrays within are
						maintained.
					</p>
				</>
			),
			code: (
				<>{`
const fruit = {info: {name: 'Apple 🍎'}}
const fruitCpy = {...fruit};

fruitCpy.info.name = 'Grape 🍇'  // ❌ will affect "fruit"
console.log(fruit.info.name)     // ❌ Outputs: 'Grape 🍇'

fruitCpy.info = 'abc';           // ✅ Gets a new value without affecting "fruit"
console.log(fruit.info.name)     // ✅ Outputs: 'Apple 🍎'


const fruits = [{name: 'Apple 🍎'}]
const fruitsCpy = [...fruits]

fruitsCpy[0].name = 'Grape 🍇'   // ❌ will affect "fruits"
console.log(fruits[0].name)      // ❌ Outputs: 'Grape 🍇'

fruitsCpy[0] = 'abc';            // ✅ Gets a new value without affecting "fruits"
console.log(fruits[0].name);     // ✅ Outputs: 'Apple 🍎'

			`}</>
			),
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "String.prototype.padStart()",
		answ: {
			desc: "The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.",
			code: <>{`
padStart(targetLength, padString)

const a = 'abc';
padStart(4, 'x');    // 'xabc'
			`}</>,
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "isNaN",
		answ: {
			desc: <><p>Determines if a value is not numeric.<br />It's ideal for checking if a string is a number</p></>,
			code: <>{`
isNaN('abc')    // true

!isNaN('123')    // true
!isNaN(456)      // true
			`}</>,
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Array.prototype.shift()",
		answ: {
			desc: <>The shift() method removes the first element from an array and returns that removed element.<br />This method changes the length of the array.</>,
			code: "",
			url: "",
		},
		tags: ["Javascript", "New"],
	},
	{
		quest: "Array.prototype.unshift()",
		answ: {
			desc: "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.",
			code: "unshift(element0, element1, /* ... ,*/ elementN)",
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Array.prototype.join()",
		answ: {
			desc: "The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.",
			code: "join(separator)",
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Number.prototype.toFixed() vs toPrecision()",
		answ: {
			desc: (
				<>
					<p>toFixed returns a string with the number of decimal places passed to the function, rounding the last digit.</p>
					<p>
						toPrecision is similar to tofixed, passing in the precision value, returns a string representing the Number object to
						the specified precision.
					</p>
					<p>Pay attention to numbers with zeros before</p>
				</>
			),
			code: <>{`
const num = 23.456
num.toFixed(2) // '23.46'

const num = 0.00235
num.toPrecision(2) // '0.0024'
num.toFixed(2) // '0.00'
			`}</>,
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "call() vs apply() vs bind()",
		answ: {
			desc: (
				<>
					<p>All 3 methods are for calling a function with a given "this" value.</p>
					<p>The call() method calls a function with a given "this" value and arguments provided individually.</p>
					<p>The apply() method calls a function with a given "this" value, and arguments provided as an array (or an array-like object).</p>
					<p>
						The difference is that apply() lets you invoke the function with arguments as an array; call() requires the parameters be
						listed explicitly. A useful mnemonic is A for array and C for comma.
					</p>
					<p>The bind() method <b>creates a new function</b> that, when called, has its "this" keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.</p>
				</>
			),
			code: (
				<>{`
call(thisArg, arg1, ... , argN)
apply(thisArg, argsArray)

theFunction.call(undefined, ...['Matthew', 'physicist']); // used with the spread operator

---------------------------------------

const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);

				`}</>
			),
			url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Hoisting",
		answ: {
			desc: (
				<>
					<p>Hoisting allows functions to be safely used in code before they are declared.</p>
					<p>One of the advantages of hoisting is that it lets you use a function before you declare it in your code.</p>
					<p>However JavaScript only hoists declarations, not initializations!</p>
				</>
			),
			code: "",
			url: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
		},
		tags: ["Terminology"],
	},
	{
		quest: "What is the difference between arguments and parameters in javascript?",
		answ: {
			desc: "The parameters are the aliases for the values that will be passed to the function. The arguments are the actual values.",
			code: (
				<>
					<p>var foo = function( a, b, c ) {}; // a, b, and c are the parameters</p>foo( 1, 2, 3 ); // 1, 2, and 3 are the
					arguments
				</>
			),
			url: "https://stackoverflow.com/questions/12874467/what-is-the-difference-between-arguments-and-parameters-in-javascript",
		},
		tags: ["Terminology"],
	},
	{
		quest: "useEffect() vs useLayoutEffect()",
		answ: {
			desc: (
				<>
					<p>
						When hooks are stable and if you refactor any of your class components to use hooks, you'll likely move any code from
						componentDidMount, componentDidUpdate, and componentWillUnmount to useEffect.
					</p>
					<p>The one catch is that this runs after react renders your component</p>
					<p>The function passed to useEffect fires <b>after layout and paint</b>, during a deferred event.</p>
					<p>
						useLayoutEffect This runs synchronously immediately after React has performed <b>all DOM mutations (after layout)</b>. Your code runs
						immediately after the DOM has been updated, but before the browser has had a chance to 'paint' those changes
					</p>
					<p>useEffect 		 - after layout and paint</p>
					<p>useLayoutEffect - after layout, before paint</p>
				</>
			),
			code: "",
			url: "https://kentcdodds.com/blog/useeffect-vs-uselayouteffect",
		},
		tags: ["React"],
	},
	{
		quest: "useImperativeHandle()",
		answ: {
			desc: (
				<>
					<p>
						Allows us to expose imperative methods to developers who pass a ref prop to our component which can be useful when you have something that needs to happen and is hard to deal with declaratively.
					</p>
				</>
			),
			code: <>{`
const MyInput = React.forwardRef(function MyInput(props, ref) {
  
  const inputRef = React.useRef()	// <- ref that is connected to the input

  React.useImperativeHandle(ref, () => {	// <- add methods to the ref that was passed to the component
	 return {
		focusInput: () => inputRef.current.focus(),
	 }
  })
  return <input ref={inputRef} />
})


/*
❌ Don't do this!
This actually works, however there are some edge case bugs with this approach when applied in React's future concurrent mode/suspense feature (also it doesn't support callback refs). So instead, use the useImperativeHandle hook!
*/
const MyInput = React.forwardRef(function MyInput(props, ref) {

  const inputRef = React.useRef()

  ref.current = {
	 focusInput: () => inputRef.current.focus(),
  }
  return <input ref={inputRef} />
})
			`}</>,
			url: "",
		},
		tags: ["React"],
	},
		{
		quest: "useDebugValue()",
		answ: {
			desc: (
				<>
					<p>
						Uses the React Developer Tools extension to better debug values.
					</p>
					<p>Note: Only works inside custom hooks!</p>
				</>
			),
			code: <>{`
React.useDebugValue(\`\${query} => \${state}\`);


/*
	Also takes a second argument which is an optional formatter function.
	This is only really useful for situations where computing the debug value is computationally expensive (and therefore you only want it calculated when the DevTools are open and not when your users are using the app).
*/
const formatCountDebugValue = ({initialCount, step}) =>
  \`init: \${initialCount}; step: \${step}\`;

React.useDebugValue({initialCount, step}, formatCountDebugValue)
			`}</>,
			url: "",
		},
		tags: ["React"],
	},
	{
		quest: "Math.max()",
		answ: {
			desc: "",
			code: <>{`
Math.max(value0, value1, /* ... ,*/ valueN)

var nums = [-54, -23, -54, -21]
Math.max(...nums)    // -21

Math.max.apply(null, nums)    // -21
			`}</>,
			url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max",
		},
		tags: ["Javascript"],
	},
	{
		quest: "What functions to use the get the numeric day of the week and numeric day of the month?",
		answ: {
			desc: (
				<>
					<p>
						The getDay() method returns the day of the week for the specified date according to local time, where 0 represents
						Sunday, Monday = 1, Tuesday = 2, ...
					</p>
					<p>The getDate() method returns the day of the month for the specified date according to local time.</p>
					<p>&nbsp;</p>
					<p>getDay() is to the week</p>
					<p>getDate() is to the month</p>
				</>
			),
			code: "",
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Unary plus (+) before variable",
		answ: {
			desc: (
				<>
					<p>The unary plus operator converts its operand to Number type.</p>
				</>
			),
			code: <>{`
parseInt('5.51')     // 5
+'5.51'              // 5.51
Number('5.51')       // 5.51
			`}</>,
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Fetch API with async and await",
		answ: {
			desc: (
				<>{`
fetch() starts a request and returns a promise. When the request completes, the promise is resolved with the Response object.
The response object, returned by the await fetch(), is a generic placeholder for multiple data formats.
response.json() is a method on the Response object that lets you extract a JSON object from the response. The method returns a promise, so you have to wait for the JSON: await response.json().

The Response object offers a lot of useful methods (all returning promises):

response.json() returns a promise resolved to a JSON object
response.text() returns a promise resolved to raw text
response.formData() returns a promise resolved to FormData
response.blob() returns a promise resolved to a Blob (a file-like object of raw data)
response.arrayBuffer() returns a promise resolved to an ArrayBuffer (raw generic binary data)

`}</>
			),
			code: (
				<>{`
const response = await fetch(resource[, options]);

--------------------------

const [userData, setUserData] = useState({});

const getUsers = useCallback(async () => {
	const response = await fetch(url);
	return await response.json();
}, []);

useEffect(() => {
	getUsers()
		.then(users => {
			setUserData(users);
		})
}, [])
			`}</>
			),
			url: "https://dmitripavlutin.com/javascript-fetch-async-await/#3-handling-fetch-errors",
		},
		tags: ["Javascript", "React", "API"],
	},
	{
		quest: <>.includes(), .indexOf()<br />.some(), .findIndex()</>,
		answ: {
			desc: (
				<>
					<p>
						Array.prototype.includes() method determines whether an array includes a primitive value among its entries, returning
						true or false as appropriate.
					</p>
					<p>
						Array.prototype.some() receives a test function to run against each element, returning true if at least 1 passes the
						test. Good for use with an array of objects.
					</p>
					<p>
						Array.prototype.indexOf() used in an array of primitives, it returns the first index at which a given element can
						be found in the array, or -1 if it is not present.
					</p>
					<p>
						Array.prototype.findIndex() receives a test function to run against each element, returns the index of the first element in the array
						that passes the test. Otherwise, -1. Good for use with an array of objects.
					</p>
				</>
			),
			code: null,
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "What are portals in React?",
		answ: {
			desc: (
				<>
					<p>
						Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent
						component.
					</p>
				</>
			),
			code: null,
			url: "",
		},
		tags: ["Terminology", "React"],
	},
	{
		quest: "Rest parameters",
		answ: {
			desc: (
				<>
					<p>Can be seen as an acumulator of arguments, transforming it into an array.</p>
					<p>
						The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way
						to represent variadic functions in JavaScript.
					</p>
					<p>
						A function definition's last parameter can be prefixed with "..." (three U+002E FULL STOP characters), which will
						cause all remaining (user supplied) parameters to be placed within a standard JavaScript array. Only the last
						parameter in a function definition can be a rest parameter.
					</p>
				</>
			),
			code: (
				<>{`
function sum(...theArgs) {
	return theArgs.reduce((previous, current) => {
		return previous + current;
	});
}

console.log(sum(1, 2, 3, 4));
// expected output: 10
			`}</>
			),
			url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters",
		},
		tags: ["Javascript"],
	},
	{
		quest: "What can you do with Hooks?",
		answ: {
			desc: (
				<>
					<p>Hooks are functions that let you “hook into” React state and lifecycle features from function components.</p>
					<p>
						With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow
						you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many
						components or with the community.
					</p>
					<p>
						Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a
						subscription or fetching data), rather than forcing a split based on lifecycle methods.
					</p>
					<p>
						Sometimes, we want to reuse some stateful logic between components. Traditionally, there were two popular solutions
						to this problem: higher-order components and render props. Custom Hooks let you do this, but without adding more
						components to your tree.
					</p>
				</>
			),
			code: null,
			url: "",
		},
		tags: ["React"],
	},
	{
		quest: "Custom hooks vs Hocs vs render props",
		answ: {
			desc: (
				<>
					<h5>Custom hooks</h5>

					<p>Control: When the component that needs some logic is under your control.</p>
					<p>Readability: Custom hooks help keep the component code clean and focused on UI logic.</p>
					<p>Reusability: Easy to reuse logic across multiple components without modifying their structure.</p>

					<h5>Higher-Order Components (HOCs)</h5>

					<p>Third-Party Components: When you need to enhance or add logic to a third-party component.</p>
					<p>Encapsulation: When you want to encapsulate logic and avoid modifying the original component.</p>
					<p>Consistency: When you need to apply the same logic to multiple components consistently.</p>

					<h5>Render Props</h5>

					<p>Third-Party Components: When you need to pass additional data or logic to a third-party component in a flexible way.</p>
					<p>Flexibility: When you need more control over how the logic affects rendering.</p>
					<p>Avoiding Naming Collisions: Render props can help avoid naming collisions since you control the rendering.</p>
				</>
			),
			code: (
				<>{`
// Custom hook

import useUser from './useUser';

function MyComponent() {
  const user = useUser();

  return (
    <div>
      {user ? <p>User: {user.name}</p> : <p>Loading...</p>}
    </div>
  );
}

// ----------------------------------------
// Higher order component

import withUser from './withUser';
import ThirdPartyComponent from 'third-party-library';

const EnhancedComponent = withUser(ThirdPartyComponent);

function App() {
  return <EnhancedComponent />;
}

// ----------------------------------------
// Render props

import UserProvider from './UserProvider';
import ThirdPartyComponent from 'third-party-library';

function App() {
  return (
    <UserProvider>
      {(user) => <ThirdPartyComponent user={user} />}
    </UserProvider>
  );
}
			`}</>
			),
			url: "",
		},
		tags: ["React"],
	},
	{
		quest: "useState lazy initialization",
		answ: {
			desc: (
				<>
					<p>
						To avoid initializing with expensive functions, a function can be passed to useState that will run only on the first
						render.
					</p>
				</>
			),
			code: <>{`
function Table(props) {
	// ⚠️ createRows() is called on every render
	const [rows, setRows] = useState(createRows(props.count));

	// ✅ createRows() is only called once
	const [rows, setRows] = useState(() => createRows(props.count));
}
			`}</>,
			url: "https://reactjs.org/docs/hooks-faq.html#from-classes-to-hooks",
		},
		tags: ["React"],
	},
	{
		quest: "Strict Mode",
		answ: {
			desc: (
				<>
					<p>React.StrictMode is a tool for highlighting potential problems in an application.</p>
					<p>
						<b>It however adds an extra render in dev mode</b>.
					</p>
				</>
			),
			code: null,
			url: "https://reactjs.org/docs/strict-mode.html",
		},
		tags: ["React"],
	},
	{
		quest: "What is Currying?",
		answ: {
			desc: (
				<>
					<p>
						Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that
						each takes a single argument.
					</p>
					<p>Currying allows us to easily get partials, for example:</p>
				</>
			),
			code: <>{`
function log(date, importance, message) {
	alert('[' + date.getHours() + ':' + date.getMinutes() + '] [' + importance + ']' + message');
}

// using loadash
log = _.curry(log);

// with loadash curry function then both work:
log(new Date(), "DEBUG", "some debug"); // log(a, b, c)

log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)

// partially applied:

// logNow will be the partial of log with fixed first argument
let logNow = log(new Date());

// use it
logNow("INFO", "message"); // [HH:mm] INFO message
			`}</>,
			url: "",
		},
		tags: ["Terminology"],
	},
	{
		quest: "Testing",
		answ: {
			desc: (
				<>
					<p>Unit Testing - Testing a small part of the code, in functional programming testing a function</p>
					<p>
						Integration Testing - Testing wether multiple units in your application are working correctly together. Essentially
						combining unit tests into one larger test
					</p>
					<p>
						End to End tests - Testing from the one end, the frontend all the way to the backend. Similar to mimicking how a user
						would use the application in the browser.
					</p>
					<p>Sequence for testing:</p>
					<ol>
						<li>Render the Component</li>
						<li>Display html output to the console (optional)</li>
						<li>Grab element</li>
						<li>Do assertion</li>
					</ol>
					<p>To run tests use the command npm run test or npm test.<br />To run a specific test use the 'p' option.</p>
				</>
			),
			code: "",
			url: "https://www.youtube.com/watch?v=OVNjsIto9xM",
		},
		tags: ["Terminology", "Testing"],
	},
	{
		quest: "React Testing Library, queryBy and findBy",
		answ: {
			desc: (
				<>
					<p>
						For checking if an element isn't there initially assert with <b>queryBy</b> and expecting it to be null.
					</p>
					<p>
						Then to check if the element has appeared assert with <b>findBy</b> and expect it to be in the document.
					</p>
					<p>getBy... will throw an error if the element doesn't exist, so use queryBy</p>
				</>
			),
			code: (
				<>{`
				expect(screen.queryByTestId('button2')).toBeNull();
				expect(await screen.findByTestId('button2')).toBeInTheDocument();
			`}</>
			),
			url: "https://testing-library.com/docs/queries/about",
		},
		tags: ["Testing"],
	},
	{
		quest: "React Testing Library, methods of getting elements",
		answ: {
			desc: (
				<>
					<p>
						Component elements can be obtained by the methods provided by <b>screen</b>:
					</p>
					<ul>
						<li>Method prefix: (get|query|find)</li>
						<li>ByText</li>
						<li>ByLabelText</li>
						<li>ByRole</li>
						<li>ByAltText</li>
						<li>ByPlaceholderText</li>
						<li>ByDisplayValue</li>
					</ul>
				</>
			),
			code: (
				<>{`
// <a href="/about">About</a>
// <input type={"submit" | "button"} value="about" />
screen.getByText(/about/i)

// <label id="username-label">Username</label>
screen.getByLabelText('Username')

// <div role="dialog">...</div>
// attribute
screen.getByRole('dialog')

// <img alt="Incredibles" src="..." />
// attribute
screen.getByAltText(/incredibles/i)

// <input placeholder="Username" />
// attribute
screen.getByPlaceholderText('Username')

// <input type="text" id="lastName" value="Oliveira"/>
// input, textarea, or select with value attribute
screen.getByDisplayValue('Oliveira')
			`}</>
			),
			url: "https://testing-library.com/docs/react-testing-library/cheatsheet/",
		},
		tags: ["Testing"],
	},
	{
		quest: "React Testing Library, methods of assertion",
		answ: {
			desc: (
				<>
					<p>You can do assertions with the expect function taking a value as parameter, and calling an assertion method.</p>
					<p>Assertion methods usually start with "to". Some examples:</p>
					<ul>
						<li>toBeDisabled()</li>
						<li>toBeEmpty()</li>
						<li>toBeNull()</li>
						<li>toBeInTheDocument()</li>
						<li>toContainElement()</li>
						<li>toHaveAttribute()</li>
					</ul>
				</>
			),
			code: <>{`
// check if disabled
expect(getByText(/Click me/i).closest('button')).toBeDisabled();

// to check if enabled
expect(getByText(/Click me/i).closest('button')).not.toBeDisabled();
			`}</>,
			url: "",
		},
		tags: ["Testing", "New"],
	},
	{
		quest: "What is mocking?",
		answ: {
			desc: (
				<>
					<p>In unit testing, if real objects are impractical to incorporate into the test, we "mock" creating objects that simulate the behavior of real objects.</p>
					<p>
						An object under test may have dependencies on other (complex) objects. To isolate and test the behavior of the object, you replace the other objects with mocks that simulate the behavior of the real objects.
					</p>
				</>
			),
			code: null,
			url: "",
		},
		tags: ["Testing"],
	},
	{
		quest: "Get value of a form field using onSubmit event on the form",
		answ: {
			desc: (
				<>
					<p>Can get accessing event.target.elements, by <b>index</b>, by <b>id</b> or by <b>name</b> attribute.</p>
				</>
			),
			code: (
				<>{`
function handleSubmit(event) {
	event.preventDefault();
	const value = event.target.elements[0].value;
	const value = event.target.elements.username.value;
	const value = event.target.elements.something.value;
}

return (
<form onSubmit={handleSubmit}>
	<label>Username:</label>
	<input type="text" id="username" name="something" />
</form>
)
			`}</>
			),
			url: "",
		},
		tags: ["React"],
	},
	{
		quest: "What is State Colocation?",
		answ: {
			desc: (
				<>
					<p>
						In React colocating the state, is putting the state back near where its really needed, so say you lifted a state up
						to the parent, and it's no longer needed, for performance colocate the state back to the child component. If we kept
						the state in the parent, and where the parent makes no use of the state, every time the child component (where that
						state originated from) updates the state, the parent component will rerender the child allongside all the other
						components within the parent component, leading to a performance hit.
					</p>
					<p>When the state of the child component is in the parent, but the parent makes no use of it. When the child component sets a new state, it will trigger a render in the parent, rendering all components within the parent.</p>
				</>
			),
			code: null,
			url: "",
		},
		tags: ["React"],
	},
	{
		quest: "Behaviour of \"this\"",
		answ: {
			desc: (
				<>
					<p>In JavaScript, the value of this is determined at <b>runtime based on how the function is called</b>, rather than how it is defined. This means that the value of this can be different depending on how the method is called. When a method is called on an object, the value of this is set to the object that the method is called on.</p>
					<p>However, when a class method is called without an object context, there is no object for this to refer to. As a result, the value of this defaults to the global window object in a browser environment, or the global object in a Node.js environment. This can lead to unexpected behavior or errors if the method relies on the this value being bound to the class.</p>
					<p>To bind the value of this to the class, you can use techniques like the bind method or arrow functions, as mentioned in the previous answer. These techniques explicitly set the value of this to the class, regardless of how the method is called.</p>
				</>
			),
			code: <>{`
class MyClass {
  myMethod() {
    console.log(this);
  }
}

const myObject = new MyClass();

// Call the method on the object
myObject.myMethod(); // Output: MyClass {}


// Call the method without an object context
// When you assign a method to a variable like, the method loses its original object context.
// This happens because the method is now being treated as a regular function,
// and the value of this within a regular function is determined based on how the function is called, not how it is defined.

const myFunction = myObject.myMethod;
myFunction(); // Output: window object

-----------------------------------

const obj = {
  name: "obj",
  getName: function() {
	console.log(this)
  },      
};
 
obj.getName();		// Output: {name: 'obj', getName: ƒ}

const method = obj.getName;
method();	// Output: window object

-----------------------------------

One way to solve this is to use the "bind" method passing "this" which references the class

class MyClass {
  name = "MyClass";

  constructor() {
	 this.getName = this.getName.bind(this)
  }
  getName() {
	 return this.name;
  }
}

-----------------------------------

class User {

	constructor (name) {
		this.name = name;

		// this.handleClickBtn1 = this.handleClickBtn1.bind(this);		💰 // strictly bind "this" to the class

		document.getElementById('button1').addEventListener('click', this.handleClickBtn1);	// <- it will lose it's "this" if not strictly bound
		document.getElementById('button2').addEventListener('click', this.handleClickBtn2);
	}

	getName() {
		return this.name;		// <- Here works just fine 😎
	}

	handleClickBtn1(e) {
		console.log(this);
	}

	// No issues with an arrow function, it doesn't have it's own "this"
	handleClickBtn2 = (e) => {
		console.log(this);
	}
}

-----------------------------------

Using a arrow function has drawbacks

. Why is it possible to use arrow functions?
. They don't provide their own "this" binding (they inherit this from the surrounding lexical scope).
. The this value is guaranteed to be correct at runtime, even for code not checked with TypeScript
. This will use more memory, because each class instance will have its own copy of each function defined this way
. You can't use super.getName in a derived class, because there's no entry in the prototype chain to fetch the base class method from
			`}</>,
			url: "https://www.typescriptlang.org/docs/handbook/2/classes.html#this-at-runtime-in-classes",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Module systems",
		answ: {
			desc: (
				<>
					<ul>
						<li>ES6 Modules - import / export</li>
						<li>CommonJS - Is mostly used in a Node.js environment</li>
					</ul>
				</>
			),
			code: <>{`
CommonJS:

// to export
module.exports = {
	pi: 3.14
}

// to import
import maths = require('maths.js');
maths.pi;
			`}</>,
			url: "",
		},
		tags: ["Javascript", "Terminology"],
	},
	{
		quest: "for..in vs. for..of statements",
		answ: {
			desc: (
				<>
					<p>for..in -> index<br />for..of -> iterable objects values</p>
					<p>Both for..in and for..of statements iterate over lists; the values iterated on are different though, for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the numeric properties of the object being iterated.</p>
					<p>Another distinction is that for..in operates on any object; it serves as a way to inspect properties on this object. for..of on the other hand, is mainly interested in values of iterable objects. Built-in objects like Map and Set implement Symbol.iterator property allowing access to stored values.</p>
				</>
			),
			code: <>{`
let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // "0", "1", "2",
}

for (let i of list) {
  console.log(i); // 4, 5, 6
}
			`}</>,
			url: "",
		},
		tags: ["Javascript"],
	},
	{
		quest: "Partial<Type>",
		answ: {
			desc: <>
				<p>Takes a type and converts all of its properties to optional ones.</p>
			</>,
			code: <>{`
interface Sticker {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: undefined | string;
}

type StickerUpdateParam = Partial<Sticker>;

/*
type StickerUpdateParam = {
	id?: number | undefined;
	name?: string | undefined;
	createdAt?: string | undefined;
	updatedAt?: string | undefined;
	submitter?: undefined | string;
}
*/
			`}</>,
			url: "",
		},
		tags: ["Typescript", "New"],
	},
	{
		quest: "Required<Type>",
		answ: {
			desc: <>
				<p>Creates a type which converts all optional properties to required ones.</p>
			</>,
			code: <>{`
type StickerUpdateParam = {
	id?: number | undefined;
	name?: string | undefined;
	createdAt?: string | undefined;
	updatedAt?: string | undefined;
	submitter?: undefined | string;
}

type ReqStickerUpd = Required<StickerUpdateParam>;

/*
type ReqStickerUpd = {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: string;
}
		`}</>,
		url: "",
		},
		tags: ["Typescript"],
	},
	{
		quest: "Readonly<Type>",
		answ: {
			desc: <>
				<p>Takes an object and makes its properties read-only.</p>
			</>,
			code: <>{`
interface Sticker {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: undefined | string;
}

type StickerFromAPI = Readonly<Sticker>;

/*
{
	readonly id: number;
	readonly name: string;
	readonly createdAt: string;
	readonly updatedAt: string;
	readonly submitter: undefined | string;
}
*/
			`}</>,
			url: "",
		},
		tags: ["Typescript"],
	},
	{
		quest: "Record<KeysFrom, Type>",
		answ: {
			desc: <>
				<p>When you want to restrict properties and values.</p>
				<p>Creates a type which uses the list of properties from KeysFrom and gives them the value of Type.</p>
			</>,
			code: <>{`
// List which keys come from:
type NavigationPages = "home" | "stickers" | "about" | "contact";

// The shape of the data for which each of ^ is needed:
interface PageInfo {
	title: string;
	url: string;
	axTitle?: string;
}

const navigationInfo: Record<NavigationPages, PageInfo> = {
	home: {title: "Home", url: "/"},
	about: {title: "About", url: "/about"},
	contact: {title: "Contact", url: "/contact"},
	stickers: {title: "Stickers", url: "/stickers/all"},
};
			`}</>,
			url: "",
		},
		tags: ["Typescript"],
	},
	{
		quest: "Pick<Type, Keys>",
		answ: {
			desc: <>
				<p>Creates a type by picking the set of properties Keys from Type. Essentially an allow-list for extracting type information from a type.</p>
			</>,
			code: <>{`
interface Sticker {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: undefined | string;
}

type StickerSortPreview = Pick<Sticker, "name" | "updatedAt">;

/*
type StickerSortPreview = {
	name: string;
	updatedAt: string;
}
*/
			`}</>,
			url: "",
		},
		tags: ["Typescript"],
	},
	{
		quest: "Omit<Type, Keys>",
		answ: {
			desc: <>
				<p>Creates a type by removing the set of properties Keys from Type. Essentially a block-list for extracting type information from a type.</p>
			</>,
			code: <>{`
interface Sticker {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: undefined | string;
}

type StickerTimeMetadata = Omit<Sticker, "name">;

/*
type StickerTimeMetadata = {
	updatedAt: string;
	id: number;
	createdAt: string;
	submitter: undefined | string;
}
*/
			`}</>,
			url: "",
		},
		tags: ["Typescript"],
	},
	{
		quest: "Exclude<Type, RemoveUnion>",
		answ: {
			desc: <>
				<p>Works on unions.</p>
				<p>Creates a type where any property in Type's properties which don't overlap with RemoveUnion.</p>
			</>,
			code: <>{`
type NavigationPages = "home" | "stickers" | "about" | "contact";
type HomeNavigationPages = Exclude<NavigationPages, "home">;

// type HomeNavigationPages = "stickers" | "about" | "contact"
			`}</>,
			url: "",
		},
		tags: ["Typescript"],
	},
	{
		quest: "Extract<Type, MatchUnion>",
		answ: {
			desc: <>
				<p>Works on unions.</p>
				<p>Creates a type where any property in Type's properties are included if they overlap with MatchUnion.</p>
			</>,
			code: <>{`
type NavigationPages = "home" | "stickers" | "about" | "contact";
type DynamicPages = Extract<NavigationPages, "home" | "stickers">;

// type DynamicPages = "home" | "stickers"
			`}</>,
			url: "",
		},
		tags: ["Typescript"],
	},
	{
		quest: "NonNullable<Type>",
		answ: {
			desc: <>
				<p>Creates a type by excluding null and undefined from a set of properties. Useful when you have a validation check.</p>
			</>,
			code: <>{`
interface Sticker {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: undefined | string;
}
type StickerLookupResult = Sticker | undefined | null;
type ValidatedResult = NonNullable<StickerLookupResult>;

// type ValidatedResult = Sticker
			`}</>,
			url: "",
		},
		tags: ["Typescript"],
	},
	{
		quest: "ReturnType<Type>",
		answ: {
			desc: <>
				<p>Gets the return type of a function.</p>
			</>,
			code: <>{`
declare function getStickerByID(id: number): Promise<StickerLookupResult>;
type StickerResponse = ReturnType<typeof getStickerByID>;

// type StickerResponse = Promise<StickerLookupResult>
			`}</>,
			url: "",
		},
		tags: ["Typescript"],
	},
	{
		quest: "InstanceType<Type>",
		answ: {
			desc: <>
				<p>Creates a type which is an instance of a class, or object with a constructor function.</p>
				<p>For when you want to create an instance of a class, and you want to give it the type of the class.</p>
			</>,
			code: <>{`
class StickerCollection {
	stickers: Sticker[];
}

type CollectionItem = InstanceType<typeof StickerCollection>;
// type CollectionItem = StickerCollection

type CollectionItem = typeof StickerCollection;		// <- gives error

const a:CollectionItem = new StickerCollection();
			`}</>,
			url: "",
		},
		tags: ["Typescript", "New"],
	},
	{
		quest: "Narrowing",
		answ: {
			desc: <>
				<p>Narrowing in typescript is the process of "narrowing" down the type to a specific logical branch within a function.<br />For that you make use of <b>type guards</b>, for example: "typeof", "instance of", "in"</p>
			</>,
			code: null,
			url: "",
		},
		tags: ["Typescript", "Terminology", "New"],
	},
	{
		quest: "Type assertions",
		answ: {
			desc: <>
				<p>Are purely a compile time construct and a way for you to provide hints to the compiler on how you want your code to be analyzed.</p>
				<p>Type assertion is forcing a type with the "as" keyword.</p>
			</>,
			code: <>{`
const value: unknown = "Hello World";
const someString: string = value as string;
const otherString = someString.toUpperCase(); // "HELLO WORLD"
			`}</>,
			url: "",
		},
		tags: ["Typescript", "Terminology"],
	},
	{
		quest: "How to check whether a string contains a substring in JavaScript?",
		answ: {
			desc: <>
				<p>Use .includes() or .indexOf() > 0</p>
			</>,
			code: null,
			url: "",
		},
		tags: ["Javascript", "New"],
	},
	{
		quest: "What is database seeding?",
		answ: {
			desc: <>
				<p>Database seeding is populating a database with an initial set of data. It's common to load seed data such as initial user accounts or dummy data upon initial setup of an application.</p>
			</>,
			code: null,
			url: "",
		},
		tags: ["Testing", "New"],
	},
	{
		quest: "What are the types of patterns that are used in React applications?",
		answ: {
			desc: <>
				<p>Context Module Functions Pattern - Allows you to encapsulate a complex set of state changes into a utility function which can be tree-shaken and lazily loaded.</p>
				<p>Compound Components Pattern - Enables you to provide a set of components that implicitly share state for a simple yet powerful declarative API for reusable components, they are components that work together to form a complete UI.</p>
				<p>The Prop Collections and Getters Pattern - Allows your hook to support common use cases for UI elements people build with your hook. <br />Basically your component provides a props object that people can simply spread across the UI they render.</p>
				<p>State Reducer Pattern - The State Reducer Pattern inverts control over the state management of your hook and/or component to the developer using it so they can control the state changes that happen when dispatching events.</p>
				<p>The Control Props pattern - Allows users to completely control state values within your component. This differs from the state reducer pattern in the fact that you can not only change the state changes based on actions dispatched but you also can trigger state changes from outside the component or hook as well.</p>
			</>,
			code: <>{`
/*
Context Module

Essentially it's building a function that will get passed the dispatcher, for it to use the dispatcher how it pleases, without you having to worry about in what way to invoke the dispatcher.

updateUser() is exported as well as the context provider and consumer.
To use, the dispatch function received from useUser is passed to updateUser along any other arguments.
The updateUser() function handles the dispatching of the correct actions and execution order.
*/

async function updateUser(dispatch, user, updates) {

  dispatch({type: 'start update', updates})

  try {
	 const updatedUser = await userClient.updateUser(user, updates);
	 dispatch({type: 'finish update', updatedUser})
	 return updatedUser

  } catch (error) {
	 dispatch({type: 'fail update', error})
	 throw error
  }
}

// export {UserProvider, useUser, updateUser}

// ------------------------------------------------------

/*
Compound Components

To pass down props to direct children use React.Children.map with React.cloneElement.
If passing props down to children at any depth use context.
*/

function Foo({children}) {
  return React.Children.map(children, (child, index) => {
	 return React.cloneElement(child, {
		id: \`i-am-child-\${index}\`,
	 })
  })
}

function Bar() {
  return (
	 <Foo>
		<div>I will have id "i-am-child-0"</div>
		<div>I will have id "i-am-child-1"</div>
		<div>I will have id "i-am-child-2"</div>
	 </Foo>
  )
}

// ------------------------------------------------------

/*
The Prop Collections and Getters Pattern
*/

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  const togglerProps = {'aria-pressed': on, onClick: toggle}	// <- 
  return {on, toggle, togglerProps}
}

function App() {
  const {on, togglerProps} = useToggle()

  return (
	 <div>
		<Switch on={on} {...togglerProps} />
		<hr />
		<button aria-label="custom-button" {...togglerProps}>
		  {on ? 'on' : 'off'}
		</button>
	 </div>
  )
}

// ------------------------------------------------------
/*

*/
			`}</>,
			url: "",
		},
		tags: ["React Patterns"],
	},
	{
		quest: "What is a closure?",
		answ: {
			desc: <>
				<p>A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.</p>
				<p>Closure is a function that references variables in the outer scope from within itself.</p>
			</>,
			code: <>{``}</>,
			url: "",
		},
		tags: ["Javascript", "Terminology"],
	},
	{
		quest: "What is an API?",
		answ: {
			desc: <>
				<p>An API is a programable interface, it provides a way for comunication between applications, without having to know how they’re implemented.</p>
			</>,
			code: <>{``}</>,
			url: "",
		},
		tags: ["Terminology"],
	},
	{
		quest: "What is the Difference Between SQL and MySQL?",
		answ: {
			desc: <>
				<p>SQL is a query programming language that is used to query and operate relational database systems.</p>
				<p>MySQL is a relational database management system that uses SQL, it allows you to handle, modify, delete and store data in an organized way.</p>
			</>,
			code: <>{``}</>,
			url: "",
		},
		tags: [""],
	},
	{
		quest: "React.createElement",
		answ: {
			desc: <>
				<p></p>
			</>,
			code: <>{`
React.createElement(type, [props], [...children])

const container = React.createElement('div', {className: 'container'}, 
	React.createElement('h1', {}, 'My First React Code'),
	React.createElement('p', {}, 'Writing some more HTML. Cool stuff!')
);
			`}</>,
			url: "",
		},
		tags: ["React", "Terminology"],
	},
	{
		quest: "What is JSX?",
		answ: {
			desc: <>
				<p>Jsx is a xml like syntax extension to ECMAScript, it's syntatical sugar for the React.createElement() function, it allows writing JavaScript along with HTML like template syntax.</p>
			</>,
			code: <>{``}</>,
			url: "",
		},
		tags: ["React", "Terminology"],
	},
];

/*
	{
		quest: "",
		answ: {
			desc: <>
				<p></p>
			</>,
			code: <>{``}</>,
			url: "",
		},
		tags: [""],
	},
*/

// console.log(questions);

export { questions };
