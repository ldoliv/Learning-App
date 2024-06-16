import React from 'react'


// https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/
// V3 - Modified to work for any component


type Rainbow =
	| "red"
	| "orange"
	| "yellow"
	| "green"
	| "blue"
	| "indigo"
	| "violet";

// We have separated the generic dependency from the non generic
type TextProps = {		// 👈 Guarantee that "as" can only be a valid React element type with this constraint
	color?: Rainbow | 'black';
}

type AsProp<T extends React.ElementType> = {
	as?: T
}

// Since TextProps was split and we need the keys of both, we created a new type for that
type PropsToOmit<T extends React.ElementType, K> = keyof (AsProp<T> & K);

// With the separation we can compose the type definition
type PolymorphicComponentProp<T extends React.ElementType, K = {}> =
	React.PropsWithChildren<AsProp<T> & K> &
	Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, K>>



// <T extends React.ElementType = 'span'> 👈 Important for setting the correct default type
function PolyComp<T extends React.ElementType = 'span'>({as, children, color, ...rest}: PolymorphicComponentProp<T, TextProps>) {

	// 👉 When rendering an element type at runtime, you must first assign it to a capitalised variable, and then render the capitalised variable.
	const Component = as || 'span';

	const style = color ? {style: {color}} : {}

	return (
		<Component {...rest} {...style}>{children}</Component>
	)
}

export default function SafePolymorphic() {

	return (
		<div>
			<h3>Polymorphic</h3>
			<PolyComp as="a" href="http://..." color='yellow' >Hello</PolyComp>

			<hr />
			{/* <InvalidComponent /> */}
		</div>
	)
}

// function InvalidComponent() {
// 	return (
// 		<>
// 			<PolyComp href='asdf'>Default span, doesn't allow href</PolyComp>

// 			<PolyComp as='asdf'>React.ElementType guarantees checking "as"</PolyComp>
// 			<PolyComp as='div' href='asdf'>React.ComponentPropsWithoutRef guarantees correct corresponding attributes</PolyComp>
// 		</>
// 	)
// }
