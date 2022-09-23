import {useEffect, useState} from "react"
import LoadingService from "../services/LoadingService";


export default function Loader() {

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		
		console.log('Loader useEffect');

		const event = LoadingService.setLoading(setLoading)
		
		return () => {
			event.off()
			// LoadingService.unsetLoading()		// <- also works
		}
	}, [])

	return (
		<div>{loading ? `Loading` : ``}</div>
	)
}