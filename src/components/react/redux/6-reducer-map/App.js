import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/countReducer_v1";
import {countActions} from './redux/countReducer_v2';

export default function App() {

	const count = useSelector(state => state.count);
	const dispatch = useDispatch();

	function handleInc() {
		// dispatch(increment(4));
		dispatch(countActions.increment(4));
	}
	function handleDec() {
		// dispatch(decrement(2));
		dispatch(countActions.decrement(2));
	}

	return (
		<>
			<Display count={count} />
			<Dashboard onInc={handleInc} onDec={handleDec} />
		</>
	)
}
