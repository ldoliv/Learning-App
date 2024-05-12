import React from "react";

// Idea of this function is to call any number of functions with the same arguments passed
// => callAll(onClick, toggle)(event), will call onClick and toggle passing the event

function callAll(...fns) {
  return (...args) => {   // this line here is to capture all the arguments passed to the function
    fns.forEach(fn => {
      fn && fn(...args)
    })
  }
}

// if you wish to cancel your event and any further events from executing
function callAll2(...fns) {
	return (...args) => {

		let result = true;
		fns.forEach(fn => {
			if (result && fn) {
				result &= fn(...args);
		 	}
    })
  }
}

export function useToggle() {
  const [on, setOn] = React.useState(false)

  const toggle = (event) => {
    console.log('in toggle: %o', event);
    setOn(!on)
  }

  const reset = (event) => {
    console.log('in reset: %o', event);
    setOn(false);
  }


  function getTogglerProps({onClick, ...props} = {}) {
    return {
      'aria-pressed': on,
      onClick: (event) => callAll(onClick, toggle)(event),  // executes the onClick we passed it in PropGetters.js as well as the toggle function
      ...props,
    }
  }

  function getResetterProps({onClick, ...props} = {}) {
    return {
      onClick: callAll(onClick, reset),
      ...props,
    }
  }

  return {on, toggle, getTogglerProps, getResetterProps}
}