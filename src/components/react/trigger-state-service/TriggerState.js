import GetData from "./components/GetData"
import Loader from "./components/Loader"

export function TriggerState() {

	return (
		<>
			<Loader />
			<GetData />
		</>
	)
}
