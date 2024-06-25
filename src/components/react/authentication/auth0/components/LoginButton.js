import {useAuth0} from '@auth0/auth0-react';
import React from 'react';


export default function LoginButton() {

	const {loginWithRedirect} = useAuth0();

	return (
		<button className='btn btn-light' onClick={() => loginWithRedirect()}>Sign in</button>
	)
}