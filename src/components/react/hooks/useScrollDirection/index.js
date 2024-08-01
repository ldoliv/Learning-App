import React, {useRef} from 'react'
import useScrollDirection from './useScrollDirection';


export default function ScrollDirection() {
	const ref = useRef();
	const {direction} = useScrollDirection(ref);

	return (
		<>
			Scroll Direction: {direction}
			<div ref={ref}  style={{height: '500px', overflow: 'auto'}}>
				<div style={{height: '2000px'}}></div>
			</div>
		</>
	)
}
