import React from 'react';
import {Switch} from 'components/global/Switch/Switch';



export function Toggle(props) {

  const [on, setOn] = React.useState(false)

  const toggle = () => setOn(!on)

  
	return React.Children.map(props.children, (child, index) => {

		// Only pass props to allowed child components
		if (allowedTypes.includes(child.type)) {
			return React.cloneElement(child, {
				on,
				toggle
			})
		}

		// for every other child component return itself
		return child;
  })
}

export const ToggleOn = ({on, children}) => on ? children : null

export const ToggleOff = ({on, children}) => !on ? children : null

export const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />


const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]