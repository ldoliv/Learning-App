import {useAuth0} from '@auth0/auth0-react';
import React from 'react'


export default function UserProfile(props) {
	const {user, isAuthenticated} = useAuth0();

	const {picture, name, ...rest} = user || {};

	let className = 'user-profile';
	className += props.className ? ` ${props.className}` : ``;

	return (
		isAuthenticated ? (
			<div className={className}>
				{picture && <img className="mb-3" src={picture} alt="" width="96" height="96" />}
				<h2>{name}</h2>
				<ul className='my-4' >
					{
						Object.keys(rest).map((key, idx) => {
							let value = rest[key];
							value = typeof value === 'boolean' ? (value ? 'true' : 'false') : value;
							return <li key={idx}>{key}: {value}</li>
						})
					}
				</ul>
			</div>
		) : null
	)
}
