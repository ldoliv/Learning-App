import {useState, useEffect, useCallback, useMemo} from "react";

const url = "https://jsonplaceholder.typicode.com/users/1";
/** 
  // Sample Response
  {
	 id: 1,
	 name: "Leanne Graham",
	 username: "Bret",
	 email: "Sincere@april.biz",
	 phone: "1-770-736-8031 x56442",
	 website: "hildegard.org"
  }
**/


export default function RunFetch() {

	const [userData, setUserData] = useState({});

	const getUsers = useCallback(async () => {
		const response = await fetch(url);
		return await response.json();
	}, []);

	useEffect(() => {
		getUsers()
			.then(users => {
				setUserData(users);
			})
	}, [])

	// No need to touch code below
	return (
		<div className="App">
			<h2>User Data</h2>
			<p>
				<strong>Name: </strong>{" "}
				{userData.name || "(Need to populate name here)"}
			</p>
			<p>
				<strong>Website: </strong>
				{userData.website || "(Need to populate website here)"}
			</p>
			<p>
				<strong>Email: </strong>
				{userData.email || "(Need to populate email here)"}
			</p>
			<p>
				<strong>Phone: </strong>
				{userData.phone || "(Need to populate phone here)"}
			</p>
		</div>
	);
}
