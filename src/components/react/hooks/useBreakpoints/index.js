import React from 'react'
import {useRenderCounter} from '../useRenderCounter/UseRenderCounter'
import {useBreakpoints} from './useBreakpoints';

export default function ShowcaseUseBreakpoints() {

	const renderCount = useRenderCounter(0);
	const breakpoints = useBreakpoints({
		tablet: 480, // winWidth >= 480 && winWidth < 1200
		desktop: 1200, // winWidth >= 1200
	}, 150);


	return (
		<div style={{
			position: 'absolute',
			width: '100%',
			left: 0,
			padding: '0 20px'
		}}>
			<p className='mb-3'>Resize the window</p>
			<h4>{renderCount} Breakpoint: {Object.keys(breakpoints).find(breakpoint => breakpoints[breakpoint])}</h4>
		</div>
	)
}
