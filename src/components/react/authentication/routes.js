

export const routes = [
	{
		path: 'jwt-access-tokens-v1',
		label: <>
			V1 - Json web tokens, uses session storage to keep access token.
		</>,
		componentFilename: 'jwt-access-tokens-v1/Jwt',
	},
	{
		path: 'jwt-access-tokens-v2',
		label: <>
			V2 - Json web tokens, safer, access token is stored and retrieved from memory
		</>,
		componentFilename: 'jwt-access-tokens-v2/Jwt',
	},
	// {
	// 	path: 'auth-zero',
	// 	label: <>
	// 		Auth0
	// 	</>,
	// 	componentFilename: 'auth-zero',
	// },
];
