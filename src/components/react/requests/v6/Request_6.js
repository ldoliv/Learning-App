import {useAsync} from 'components/react/hooks/useAsync/v2/useAsync';
import {apiMethods} from './api/api';



export default function Request_6() {

	const [state, getUser] = useAsync(apiMethods().getUser, {
		delay: 1000,
		abortRequest: true,
		// failRate: 0.5
	});

	// const [state, getUser] = apiMethods().useGetUser();

	const handleClick = async () => {
		getUser(1);
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