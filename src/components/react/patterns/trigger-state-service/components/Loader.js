import {useEffect, useState} from "react"
import LoadingService from "../services/LoadingService";



export default function Loader() {

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		
		console.log('Loader useEffect');

		const event = LoadingService.setLoading(setLoading)
		
		return () => {
			LoadingService.unsetLoading()		
			// event.off()		// <- also works
		}
	}, [])

	return (
		<div>{loading ? `Loading` : ``}</div>
	)
}