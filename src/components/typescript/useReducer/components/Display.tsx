type DisplayPropsT = {
	value: number
}
export default function Display(props: DisplayPropsT) {
	return (
		<div>The value is: {props.value}</div>
	)
}