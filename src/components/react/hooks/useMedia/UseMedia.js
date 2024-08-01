import {useState, useDebugValue, useEffect} from 'react'


export function useMedia(query, initialState = false) {
	const [state, setState] = useState(initialState)
	
  useDebugValue(`\`${query}\` => ${state}`)


  useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(query)

    function onChange() {
      if (!mounted) {
        return
      }
      setState(Boolean(mql.matches))
    }

    mql.addListener(onChange)
    setState(mql.matches)

    return () => {
      mounted = false
      mql.removeListener(onChange)
    }
  }, [query])

  return state
}
