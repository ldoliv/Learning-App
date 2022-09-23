import React from 'react';
import { useRenderCounter } from './UseRenderCounter';


export default function RenderCounter() {
	const [, forceUpdate] = React.useState()
	const renderCount = useRenderCounter(0);

	return (
		<>
			<h1>{renderCount}</h1>
			<button onClick={() => forceUpdate({})}>Click</button>
		</>
	);
}
