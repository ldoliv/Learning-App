const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// A fake authenticator to mock async api call
export async function apiLogin(name) {
	await delay(2000);
	if (name.toLowerCase() === "john") {
		// return true;
		return {
			name: 'John',
			token: 'af92dfhgk39dh239gyj40dj'
		};
	}
	throw new Error("User not found!");
}