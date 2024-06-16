import React from 'react'


// https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/



type PolyProps<T extends React.ElementType> = {		// Guarantee that "as" can only be a valid React element type with this constraint
	as?: T;
	children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>		// 👈 this ensures that we can only use the correct html attributes of "as" tag

// <T extends React.ElementType = 'span'> 👈 Important for setting the correct default type
function PolyComp<T extends React.ElementType = 'span'>({as, children, ...rest}: PolyProps<T>) {

	// 👉 When rendering an element type at runtime, you must first assign it to a capitalised variable, and then render the capitalised variable.
	const Component = as || 'span';

	return (
		<Component {...rest}>{children}</Component>
	)
}

// 
function InvalidComponent() {
	return (
		<>
			{/* Uncomment to check */}
			{/* <PolyComp href='asdf'>Default span, doesn't allow href</PolyComp> */}

			{/* <PolyComp as='asdf'>React.ElementType guarantees checking "as"</PolyComp> */}
			{/* <PolyComp as='div' href='asdf'>React.ComponentPropsWithoutRef guarantees correct corresponding attributes</PolyComp> */}
		</>
	)
}

export default function SafePolymorphic() {

	return (
		<div>
			<h3>Polymorphic</h3>
			
			<PolyComp as='a' href='http://...'>Hello</PolyComp>

			<div>------------------</div>

			<InvalidComponent />
		</div>
	)
}
