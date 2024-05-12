import React, {useState} from "react";

function IncrementHOC(Comp, increment = 1) {
	return function Component(props) {

		const {initValue = 0} = props;
		const [count, setCount] = useState(initValue);

		const handleClick = () => setCount(count + increment);

		return (
			<Comp {...props} count={count} increment={increment} onClick={handleClick} />
		)
	}
}

export {IncrementHOC}