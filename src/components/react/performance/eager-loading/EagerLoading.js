// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'



const loadGlobe = () =>
	// You can prefetch the script, meaning that the browser will load the script when everything else has already loaded
	// use import(/* webpackPrefetch: true */ './Globe')
	import(
		/* webpackPrefetch: true */
		'./Globe'
	);
const Globe = React.lazy(loadGlobe);



function EagerLoading() {

	const [showGlobe, setShowGlobe] = React.useState(false)

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				justifyContent: 'center',
				height: '100%',
				padding: '2rem',
			}}
		>
			<label
				style={{marginBottom: '1rem'}}
				
				onMouseEnter={loadGlobe}
				onFocus={loadGlobe}>
				
				<input
					type="checkbox"
					checked={showGlobe}
					onChange={e => setShowGlobe(e.target.checked)}
				/>

				{' show globe'}
			</label>
			<div style={{width: 400, height: 400}}>
				<React.Suspense fallback={<div>Loading...</div>}>
					{showGlobe ? <Globe /> : null}
				</React.Suspense>
			</div>
		</div>
	)
}

export default EagerLoading
