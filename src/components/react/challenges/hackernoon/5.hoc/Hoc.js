import React, {useEffect, useState, useRef} from "react"
import IncrementBy2 from './components/IncBy2';
import IncrementBy20 from './components/IncBy20';
import IncrementBy200 from './components/IncBy200';


// https://hackernoon.com/top-3-coding-challenges-for-expert-level-react-developers
// Top 3 Coding Challenges for Expert-Level React Developers

// ---------------------------------------------------------------
//  Create a Higher-Order Component to reuse component logic
// ---------------------------------------------------------------

/*
	- Create three different components that have similar component logic.
	- To achieve this create a Higher-Order Component to be reused by the three components. 

	For this challenge, you have three components, each containing a button that increments the value in the state by a specific number.
	Suppose, three components are:

	“ComponentA” where the button increments the value by two.
	“ComponentB” where the button increments the value by twenty.
	“ComponentC” where the button increments the value by two hundred.
*/

/*
	Things that come to mind with hocs:
		- The added functionality of the hoc has to get passed to the component it receives, and so it passes it down through props

*/



export default function App() {

	return (
		<>
			<IncrementBy2 initValue={10} />
			<IncrementBy20 initValue={2} />
			<IncrementBy200 initValue={0} />
		</>
	)
}