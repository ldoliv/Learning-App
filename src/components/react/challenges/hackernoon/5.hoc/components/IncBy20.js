import { IncrementHOC } from "./IncHoc";


function IncrementBy20(props) {
	return (
		<div className="mb-4 container-fluid">
			<h4>This component increments by 20</h4>
			<div className="row">
				<div className="col-auto">
					<button onClick={props.onClick}>Increment by 20</button>
				</div>
				<div className="col-auto">
					<div>Count: {props.count}</div>
				</div>
			</div>
		</div>
	)
}

export default IncrementHOC(IncrementBy20, 20);