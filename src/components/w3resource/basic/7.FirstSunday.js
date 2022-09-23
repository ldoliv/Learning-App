import {useState, useEffect, useLayoutEffect} from "react";



export default function FirstSunday() {

	const [result, setResult] = useState();


	useEffect(() => {

		const result = getFirstSunday(2014, 2050);
		setResult(result);

	}, [])

	function getFirstSunday(startYear, endYear) {
		let date;
		for (let i = startYear; i <= endYear; i++) {
			date = new Date(i.toString());

			console.log(date);

			// sunday == 0, monday == 1, ...
			if (!date.getDay()) {
				return date.getFullYear();
			}
		}
	}


	return (
		<div>1st of January being a Sunday: {result}</div>
	)
}