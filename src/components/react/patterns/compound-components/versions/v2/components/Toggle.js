import React from 'react';
import {Switch} from 'components/global/Switch/Switch';



const ToggleContext = React.createContext();


export function Toggle({children}) {

	const [on, setOn] = React.useState(false)

	const toggle = () => setOn(!on)
	
	return <ToggleContext.Provider value={{on, toggle}}>{children}</ToggleContext.Provider>
}

function useToggle() {
	return React.useContext(ToggleContext);
}

export const ToggleOn = ({children}) => {
	const {on} = useToggle();
	return on ? children : null
}

export const ToggleOff = ({children}) => {
	const {on} = useToggle();
	return !on ? children : null
}

export const ToggleButton = (props) => {
	const {on, toggle} = useToggle();
	return <Switch {...props} on={on} onClick={toggle} />
}

