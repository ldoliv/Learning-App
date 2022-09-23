import * as React from 'react'
import { Toggle, ToggleOn, ToggleOff, ToggleButton } from './components/Toggle'



export default function CompoundComponents() {
	return (
	 <div>
		<Toggle>
			<div>Hello</div>
			<div>
				<ToggleOn>The button is on</ToggleOn>
				<ToggleOff>The button is off</ToggleOff>
				<ToggleButton />
			</div>
		</Toggle>
		</div>
	)
}