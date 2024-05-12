import React from 'react'


const CountContext = React.createContext()


function CountProvider(props) {
	const [count, setCount] = React.useState(0)
	
	// memoize value
	const value = React.useMemo(() => ({count, setCount}), [count])
	// const value = {count, setCount}
	
  return <CountContext.Provider value={value} {...props} />
}


function useCount() {
	const context = React.useContext(CountContext)

	if (!context) {
		throw new Error('useCount must be used within a CountProvider')
	}

	const {count, setCount} = context
	const increment = () => setCount(c => c + 1)

	return {count, increment}
}

export {CountProvider, useCount}
