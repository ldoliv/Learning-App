import React, {useState, ComponentType} from "react";

interface BaseCompProps {
	count: number;
	increment: number;
	onClick: () => void;
}

function BaseComp({count, increment, onClick}: BaseCompProps) {
	return (
		<div className="mb-4 container-fluid">
			<div className="row">
				<div className="col-auto">
					<button onClick={onClick}>Increment by {increment}</button>
				</div>
				<div className="col-auto">
					<div>Count: {count}</div>
				</div>
			</div>
		</div>
	);
}

interface IncrementHOCProps {
	initValue?: number;
}

function IncrementHOC<P extends object>(
	Comp: ComponentType<P & BaseCompProps>,
	increment: number = 1
) {
	return function Component(props: P & IncrementHOCProps) {
		const {initValue = 0, ...rest} = props;
		const [count, setCount] = useState(initValue);

		const handleClick = () => setCount(count + increment);

		return <Comp {...(rest as P)} count={count} increment={increment} onClick={handleClick} />;
	};
}

const IncrementByTwo = IncrementHOC(BaseComp, 2);
const IncrementByTwenty = IncrementHOC(BaseComp, 20);
const IncrementByTwoHundred = IncrementHOC(BaseComp, 200);

export function App() {
	return (
		<>
			<IncrementByTwo initValue={10} />
			<IncrementByTwenty initValue={2} />
			<IncrementByTwoHundred initValue={0} />
		</>
	);
}
