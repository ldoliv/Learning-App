import React from 'react'


type TitleProps = {
	tag?: string,
	color: string,
	children: React.ReactNode
}

type H2Props = {
	color: string,
	children: React.ReactNode
}


function Title({
	tag = 'h1',
	children
}: TitleProps) {

	// const style = {
	// 	color: color ? color : '#fff'
	// }
	return React.createElement(tag, {}, children)
}



function MakeH2<P>(Component: React.ComponentType<P>) {

	return ({...props}: P) => {
		return <Component {...(props as P)} tag="h2" />
	}
}

const H2 = MakeH2<H2Props>(Title)


export default function Experiments() {
	

	return (
		<H2 color="red">Experiment</H2>
	)
		
}

