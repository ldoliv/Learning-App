

import React, {useRef} from 'react'
import useDetectOverflow from './useDetectOverflow';


export default function ShowcaseUseDetectOverflow() {

	const ref = useRef(null);
	const isOverflowing = useDetectOverflow(ref, 300);

	return (
		<>
			<p>Resize window!</p>
			<h4 className='mb-4'>Overflowing: {isOverflowing ? 'true' : 'false'}</h4>
			<div ref={ref} style={{
				overflow: 'auto',
				maxHeight: '150px'
			}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, aperiam mollitia quod repellat ipsam in, neque quidem rem quibusdam dolores quo esse atque sunt modi numquam impedit, laborum magni minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorem hic enim omnis qui distinctio in incidunt dolores quaerat doloremque quasi eum perferendis, harum explicabo voluptatum, nobis eligendi odit necessitatibus.</div>
		</>
	)
}
