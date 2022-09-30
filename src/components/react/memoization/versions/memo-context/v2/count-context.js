import React from 'react'


const CountStateContext = React.createContext()
const CountUpdaterContext = React.createContext()


function CountProvider({children, ...props}) {
	const [count, setCount] = React.useState(0)
	
	// Passed values are stable
	// "count" is a primitive, CountDisplay easily deals with it using React.memo
	// setCount is stable and can be directly passed to the provider, Counter easily deals with it using React.memo


	// Use this to check that it's unstable
	function customSetCount(fn) {
		setCount(fn)
	}
	// Uncomment to make it stable
	// customSetCount = React.useCallback(customSetCount, []);

	// Can also write it like this =>
	// const customSetCount = React.useCallback((fn) => {
	// 	setCount(fn)
	// }, []);

	return (
		<CountStateContext.Provider value={count}>
			<CountUpdaterContext.Provider value={setCount}>
			{/* <CountUpdaterContext.Provider value={customSetCount}> */}
				{children}
			</CountUpdaterContext.Provider>
		</CountStateContext.Provider>
	) 
}




function useCountState() {
  const countState = React.useContext(CountStateContext)
  if (typeof countState === 'undefined') {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return countState
}

function useCountUpdater() {

	const setCount = React.useContext(CountUpdaterContext)
	
	if (typeof setCount === 'undefined') {
		throw new Error('useCountUpdater must be used within a CountProvider')
	}
	

	const increment = React.useCallback(() => setCount((c) => c + 1), [setCount])

	// const increment = () => {
	// 	setCount(c => c + 1);
	// }

	return increment
}

export {CountProvider, useCountState, useCountUpdater}