import { IncrementHOC } from "./IncHoc";


function IncrementBy200(props) {
	return (
		<div className="mb-4 container-fluid">
			<h5>This is another component that increments by 200</h5>
			<div className="row">
				<div className="col-auto">
					<button onClick={props.onClick}>Increment by 200</button>
				</div>
				<div className="col-auto">
					<div>Count: {props.count}</div>
				</div>
			</div>
		</div>
	)
}

export default IncrementHOC(IncrementBy200, 200);