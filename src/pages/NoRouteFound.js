import React from "react";
import {useNavUp} from "contexts/RoutesContext";


export default function NoRouteFound({routes}) {

	const [navUp] = useNavUp({setFrom: true});

	React.useEffect(() => {
		navUp();
	}, [navUp])

	return (
		<div className="py-4 px-1 px-sm-0">
			<div className="container">
				No route
			</div>
		</div>
	)
}