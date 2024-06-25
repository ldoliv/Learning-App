import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import {useAuth0} from '@auth0/auth0-react';
import UserProfile from './components/UserProfile';


// https://www.youtube.com/watch?v=pAzqscDx580&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=29


// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


export default function Auth0() {

	const {isLoading, error, isAuthenticated} = useAuth0();

	return (
		<main className='my-4'>
			<h3>Auth0</h3>
			<div className="row">

				{!isAuthenticated && <div className="col-auto">
					<LoginButton />
				</div>}
				
				{isAuthenticated && (
					<div className="col-auto">
						<LogoutButton />
					</div>)
				}
			</div>

			{isLoading
				? (<p>Loading...</p>)
				: (
					error
						? <p>Authentication error</p>
						: <UserProfile className="mt-5" />
				)
			}

		</main>
	)
}
