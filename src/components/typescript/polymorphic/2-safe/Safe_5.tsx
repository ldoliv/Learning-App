import React from 'react'


// https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/
// V4 - Adding the ref prop


type Rainbow =
	| "red"
	| "orange"
	| "yellow"
	| "green"
	| "blue"
	| "indigo"
	| "violet";



type AsProp<T extends React.ElementType> = {
	as?: T
}

// Since TextProps was split and we need the keys of both, we created a new type for that
type PropsToOmit<T extends React.ElementType, K> = keyof (AsProp<T> & K);

// With the separation we can compose the type definition
type PolymorphicComponentProp<T extends React.ElementType, K = {}> =
	React.PropsWithChildren<AsProp<T> & K> &
	Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, K>>



// This is a new type utitlity with ref!
type PolymorphicComponentPropWithRef<T extends React.ElementType, K = {}> =
	PolymorphicComponentProp<T, K> & {ref?: PolymorphicRef<T>};

// This is the type for the "ref" only
type PolymorphicRef<T extends React.ElementType> =
	React.ComponentPropsWithRef<T>["ref"];


// This is the updated component props using PolymorphicComponentPropWithRef
type TextProps<T extends React.ElementType> =
	PolymorphicComponentPropWithRef<T, {color?: Rainbow | "black"}>;


// This is the type used in the type annotation for the component
type PolyComponent = <T extends React.ElementType = "span">(props: TextProps<T>) => React.ReactElement | null;


// <T extends React.ElementType = 'span'> 👈 Important for setting the correct default type
const PolyComp: PolyComponent = React.forwardRef(
	<T extends React.ElementType = 'span'>(
		{as, children, color, ...rest}: TextProps<T>,
		ref?: PolymorphicRef<T>
	) => {

		// 👉 When rendering an element type at runtime, you must first assign it to a capitalised variable, and then render the capitalised variable.
		const Component = as || 'span';

		const style = color ? {style: {color}} : {}

		return (
			<Component {...rest} {...style} ref={ref}>{children}</Component>
		)
	}) as PolyComponent;

export default function SafePolymorphic() {

	// Works, but should give an error. The element we are using is "a" tag but with a button reference
	// We will deal with this next
	const buttonRef = React.useRef<HTMLButtonElement | null>(null);

	return (
		<div>
			<h3>Polymorphic</h3>

			{/* ❌ This will be invalid */}
			{/* <PolyComp as="a" href="http://..." color='yellow' ref={buttonRef}>Hello</PolyComp> */}

			{/* ✅ This will be valid */}
			<PolyComp as="button" color='yellow' ref={buttonRef}>Hello</PolyComp>

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
