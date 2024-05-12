// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from 'components/global/Switch/Switch';
import {useToggle} from './hooks/UseToggle';



export function PropGetters() {
  const {on, getTogglerProps} = useToggle()

  return (
    <div>
		  <Switch {...getTogglerProps({on})} />
		  
		  <hr />
		  
      <button  {...getTogglerProps({
          'aria-label': 'custom-button',
			    onClick: (event) => {
				    // return false;			// If we don't want the default function "toggle()" to run return false here and use callAll2() instead
            console.info('onButtonClick')
            console.info(event)
          },
          id: 'custom-button-id',
        })}>
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}


/*
eslint
  no-unused-vars: "off",
*/
