import { IncrementHOC } from "./IncHoc";


function IncrementBy2(props) {
	return (
		<div className="mb-4 container-fluid">
			<div className="row">
				<div className="col-auto">
					<button onClick={props.onClick}>Increment by 2</button>
				</div>
				<div className="col-auto">
					<div>Count: {props.count}</div>
				</div>
			</div>
		</div>
	)
}

export default IncrementHOC(IncrementBy2, 2);