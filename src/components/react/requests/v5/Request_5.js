import {useAsync} from 'components/react/hooks/useAsync/v2/useAsync';
import {fetchApi} from './helpers/helpers';


const url = `https://jsonplaceholder.typicode.com/users/1`;
// const url = `https://jsonplaceholder.typicode.com/usersss/1654654`;		// 404
// const url = `https://jsonplaceholder.typicod.com/usersss/1654654`;		// net::ERR_NAME_NOT_RESOLVED		| domain issue


export default function Request_5() {

	const [state, request] = useAsync(fetchApi, {
		delay: 1000,
		// failRate: 0.5
	});

	const handleClick = async () => {
		request(url);
	}

	return (
		<div className="App">
			<h2>User Data</h2>

			<p>Status: {Object.keys(state.status).find(status => state.status[status])}</p>

			{state.status.resolved && <>
				<p>
					<strong>Name: </strong>{" "}
					{state.data.name || "(Need to populate name here)"}
				</p>
				<p>
					<strong>Website: </strong>
					{state.data.website || "(Need to populate website here)"}
				</p>
				<p>
					<strong>Email: </strong>
					{state.data.email || "(Need to populate email here)"}
				</p>
				<p>
					<strong>Phone: </strong>
					{state.data.phone || "(Need to populate phone here)"}
				</p>
			</>}

			{state.status.rejected && <>
				<p>
					Something went wrong. {state.error?.message}
				</p>
			</>}

			<div className='btn-group'>
				<button className='btn btn-light' onClick={handleClick}>Get User</button>
			</div>
		</div>
	)
}