import React from 'react'


// https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/
// V2 - More abstraction, we also added the color prop


type Rainbow =
	| "red"
	| "orange"
	| "yellow"
	| "green"
	| "blue"
	| "indigo"
	| "violet";

// Specific props for the component
type TextProps<T extends React.ElementType> = {		// 👈 Guarantee that "as" can only be a valid React element type with this constraint
	as?: T;
	color?: Rainbow | 'black';
}

// Props wrapper for PolyProps also guarantees proper html tags as well as their attributes and adds children type definition
type Props<T extends React.ElementType> =		// 👈 Guarantee that "as" can only be a valid React element type with this constraint
	React.PropsWithChildren<TextProps<T>> &	// 👈 You pass it your component props, and it’ll inject the children props definition for you.
	Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>		// 👈 Ensures we use the correct html attributes that "as" tag has, but we want to exclude any specific properties like 'color' and 'as'



// <T extends React.ElementType = 'span'> 👈 Important for setting the correct default type
function PolyComp<T extends React.ElementType = 'span'>({as, children, color, ...rest}: Props<T>) {

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
