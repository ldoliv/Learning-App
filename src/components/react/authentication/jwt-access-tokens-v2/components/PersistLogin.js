import {usePersistLogin} from '../hooks/usePersistLogin';
import React from 'react'


export default function PersistLogin({children}) {

	const {isLoading} = usePersistLogin();

	return (
		<>
			{isLoading ? (
				<div className='container-fluid'>
					<div className='row justify-content-center align-items-center vh-100'>
						<div className="col-auto">
							Loading...
						</div>
					</div>
				</div>
			) : children}
		</>
	)
}
