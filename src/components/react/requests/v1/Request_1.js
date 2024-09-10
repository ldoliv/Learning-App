import {useCallback, useState} from 'react';


const url = `https://jsonplaceholder.typicode.com/users/1`;
// const url = `https://jsonplaceholder.typicode.com/usersss/1654654`;		// 404
// const url = `https://jsonplaceholder.typicod.com/usersss/1654654`;		// net::ERR_NAME_NOT_RESOLVED


export default function Request_1() {

	const [user, setUser] = useState({});
	
	const getUser = useCallback(async () => {
		const response = await fetch(url);
		return await response.json();
	}, []);

	const handleClick = async () => {
		const userData = await getUser();
		setUser(userData);
	}

	return (
		<div className="App">
			<h2>User Data</h2>
			<p>
				<strong>Name: </strong>{" "}
				{user.name || "(Need to populate name here)"}
			</p>
			<p>
				<strong>Website: </strong>
				{user.website || "(Need to populate website here)"}
			</p>
			<p>
				<strong>Email: </strong>
				{user.email || "(Need to populate email here)"}
			</p>
			<p>
				<strong>Phone: </strong>
				{user.phone || "(Need to populate phone here)"}
			</p>
			<div className='btn-group'>
				<button className='btn btn-light' onClick={handleClick}>Get User</button>
			</div>
		</div>
	)
}