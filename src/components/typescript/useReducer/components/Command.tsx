type CommandPropsT = {
	handleClick: () => void
}
export default function Command(props: CommandPropsT) {
	return (
		<button className="btn btn-primary" onClick={props.handleClick}>Click me</button>
	)
}