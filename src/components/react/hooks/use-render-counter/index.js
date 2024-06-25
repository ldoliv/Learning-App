import React from 'react';
import { useRenderCounter } from './UseRenderCounter';


export default function RenderCounter() {
	const [, forceUpdate] = React.useState()
	const renderCount = useRenderCounter(0);

	return (
		<div className='container-fluid'>
			<div className="row align-items-center">
				<div className="col-auto">
					{renderCount}
				</div>
				<div className="col-auto">
					<button className='btn btn-light' onClick={() => forceUpdate({})}>Click</button>
				</div>
			</div>
		</div>
	);
}
