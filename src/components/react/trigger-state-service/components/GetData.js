import {useState} from "react"
import LoadingService from '../services/LoadingService';


const data = ['A', 'B', 'C']

export default function GetData() {

	const [data, setData] = useState([]);

	function getData() {

		LoadingService.show();

		setTimeout(() => {
			LoadingService.hide();

			setData(data);
		}, 2000)
	}

	return (
		<>
			<div>
				{data.map(item => <div>{item}</div>)}
			</div>
			<div>
				<button onClick={getData}>Get data</button>
			</div>
		</>
	)
}