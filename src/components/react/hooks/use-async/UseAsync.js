import React from "react";

function asyncReducer(state, {type, data, error}) {

  switch (type) {
    case 'pending': {
      return {status: 'pending', data: null, error: null}
    }
    case 'resolved': {
      return {status: 'resolved', data, error: null}
    }
    case 'rejected': {
      return {status: 'rejected', data: null, error}
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

export function useAsync_v1(asyncCallback, initialState, dependencies) {

  const [state, dispatch] = React.useReducer(asyncReducer, {
    status: 'idle',
    data: null,
    error: null,
    ...initialState
  })

  React.useEffect(() => {

    const promise = asyncCallback()

    if (!promise) {
      return
    }
  
    dispatch({type: 'pending'})

    promise.then(
      data => {
        dispatch({type: 'resolved', data})
      },
      error => {
        dispatch({type: 'rejected', error})
      },
    )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return state;
}

export function useAsync_v2(initialState) {

  const [state, dispatch] = React.useReducer(asyncReducer, {
    status: 'idle',
    data: null,
    error: null,
    ...initialState
  })
  

  const run = React.useCallback(promise => {
    
    if (!promise) {
      return
    }
  
    dispatch({type: 'pending'})

    promise.then(
      data => {
        dispatch({type: 'resolved', data})
      },
      error => {
        dispatch({type: 'rejected', error})
      },
    )
  }, [])

  return {...state, run};
}