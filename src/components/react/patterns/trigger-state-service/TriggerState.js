import GetData from "./components/GetData"
import Loader from "./components/Loader"


// Note that with this method, getData doesn't have access to Loader's current state, it only triggers a state change for "Loader".

// Allows a component "GetData" to change the state of another component "Loader" where the component "Loader" is not a child of component "GetData".

// Basically how this works is, Loader subscribes to a "service" by passing it's setState function to this service.
// Then the GetData component uses this service to trigger the state update of Loader.

// An alternative to this would be to use React Context Provider.

export function TriggerState() {

	return (
		<>
			<Loader />
			<GetData />
		</>
	)
}
