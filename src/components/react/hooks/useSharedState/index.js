import React from "react";
import {createSharedState} from "./useSharedState";
import CompA from "./components/CompA";
import CompB from "./components/CompB";

// Hook that can be usefull to share state between siblings


// 💰
export const sharedCount = createSharedState(10);
// export const sharedUser = createSharedState({
// 	name: 'John'
// });
export const sharedUser = createSharedState('John');



export default function App() {
	return (
		<>
			<CompA />
			<CompB />
		</>
	)
}
