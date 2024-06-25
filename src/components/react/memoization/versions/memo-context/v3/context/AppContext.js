import React, {createContext, useContext, useState, useMemo} from 'react';




const AppContext = createContext();

export function AppProvider({children}) {

	const [, forceUpdate] = useState();
	const [state, setState] = useState({
		compName: ''
	});

	const updateContextState = (name) => setState({compName: name});

	const value = useMemo(() => ({state, updateContextState}), [state.compName]);
	// const value = {state, updateContextState};

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	)
}

export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within AppProvider');
	}
	return context;
}