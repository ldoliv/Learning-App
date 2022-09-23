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
				    // return false;			// works if we use callAll2(), then toggle() won't run next
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
