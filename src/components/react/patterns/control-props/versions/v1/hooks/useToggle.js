// Control Props
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'


const callAll = (...fns) => (...args) => fns.forEach(fn => fn?.(...args))

const actionTypes = {
  toggle: 'toggle',
  reset: 'reset',
}

function toggleReducer(state, {type, initialState}) {
  switch (type) {
    case actionTypes.toggle: {
      return {on: !state.on}
    }
    case actionTypes.reset: {
      return initialState
    }
    default: {
      throw new Error(`Unsupported type: ${type}`)
    }
  }
}

function useToggle({
  initialOn = false,
  reducer = toggleReducer,
  onChange,
  on: controlledOn
} = {}) {
  const {current: initialState} = React.useRef({on: initialOn})
  const [state, dispatch] = React.useReducer(reducer, initialState)

	// undefined != null => false
	// undefined !== null => true
	const onIsControlled = controlledOn != null;
	const on = onIsControlled ? controlledOn : state.on;

  
  function dispatchWithOnChange(action) {

    // we only want to dispatch if it's not controlled, meaning that its state is controlled internally not externally
    if (!onIsControlled) {
      dispatch(action)    // call with action and then sets the new state
    }

    // We call the reducer to get the "suggested" next state
    // pass the state that is manged internally, but also the on, which might be managed externally if it's controlled
    onChange?.(reducer({...state, on}, action), action);    
  }

  const toggle = () => {
    dispatchWithOnChange({type: actionTypes.toggle})
  }
  const reset = () => {
    dispatchWithOnChange({type: actionTypes.reset, initialState})
  }

  function getTogglerProps({onClick, ...props} = {}) {
    return {
      'aria-pressed': on,
      onClick: callAll(onClick, toggle),
      ...props,
    }
  }

  function getResetterProps({onClick, ...props} = {}) {
    return {
      onClick: callAll(onClick, reset),
      ...props,
    }
  }

  return {
    on,
    reset,
    toggle,
    getTogglerProps,
    getResetterProps,
  }
}

export {useToggle, actionTypes}