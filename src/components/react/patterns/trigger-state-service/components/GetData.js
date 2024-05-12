import {useState} from "react"
import LoadingService from '../services/LoadingService';


const newData = ['A', 'B', 'C']

export default function GetData() {

	const [data, setData] = useState([]);

	function getData() {

		LoadingService.show();		// Trigger state change for "Loader"

		setTimeout(() => {
			LoadingService.hide();	// Trigger state change for "Loader"

			setData(newData);
		}, 2000)
	}

	return (
		<>
			<ul>
				{data.map((item, idx) => <li key={idx}>{item}</li>)}
			</ul>
			<div>
				<button onClick={getData}>Get data</button>
			</div>
		</>
	)
}