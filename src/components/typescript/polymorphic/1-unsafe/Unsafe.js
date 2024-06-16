import React from 'react'


// https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/


function PolyComp({as, children, ...rest}) {

	// When rendering an element type at runtime, you must first assign it to a capitalised variable, and then render the capitalised variable.
	const Component = as || 'span';

	return (
		<Component {...rest}>{children}</Component>
	)
}

function InvalidComponent() {
	return <PolyComp as='span' href='asdf'>Invalid html</PolyComp>
}


export default function Polymorphic() {

	return (
		<div>
			<h3>Polymorphic</h3>
			<PolyComp as='div'>
				Hello
			</PolyComp>
			<div>------------------</div>
			<InvalidComponent />
		</div>
	)
}
