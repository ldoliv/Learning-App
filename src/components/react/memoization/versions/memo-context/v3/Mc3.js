import React, {useState, memo, useMemo} from 'react';
import {AppProvider, useAppContext} from './context/AppContext';
import {useRenderCounter} from 'components/react/hooks/use-render-counter/UseRenderCounter';


/*
	Key takeaways:
	👉 When context state is updated only consumer components are updated regardless of memo and useMemo
	👉 Memo to memoize component A, but since its "props" from useAppContext are not stable no effect, so we need useMemo for the value passed in context
	💰 Rule of thumb, useMemo on the context value and memo on the first level child within the Provider!

*/

// This works differently when state is updated, children aren't rerendered
// "children" is a prop, if the children prop does not change, React will not re-render those children.
const Comp = ({name, children}) => {

	const {state, updateContextState} = useAppContext();
	const [, updateLocalState] = useState({});
	const renderCount = useRenderCounter(0);

	return (
		<>
			<div className="row align-items-center my-4">
				<div className="col-auto">
					{renderCount}
				</div>
				<div className="col-auto">
					<button className='btn btn-light me-2' onClick={() => updateLocalState({})}>Update local state</button>
					<button className='btn btn-light' onClick={() => updateContextState()}>{state} Update context state</button>
				</div>
				<div className="col-auto">
					<h4>{name}</h4>
				</div>
			</div>
			{children}
		</>
	)
}
// -------------------------------------

function ComponentA() {

	const {state, updateContextState} = useAppContext();
	const [, updateLocalState] = useState({});
	const renderCount = useRenderCounter(0);

	return (
		<>
			<div className="row align-items-center my-4">
				<div className="col-auto">
					{renderCount}
				</div>
				<div className="col-auto">
					<button className='btn btn-light me-2' onClick={() => updateLocalState({})}>Update local state</button>
					<button className='btn btn-light' onClick={() => updateContextState('A')}>{state.compName} Update context state</button>
				</div>
				<div className="col-auto">
					<h4>Ctx consumer Component A</h4>
				</div>
			</div>

			<ComponentB />
		</>
	)
}
// eslint-disable-next-line no-func-assign
ComponentA = memo(ComponentA);


function ComponentB() {

	const {state, updateContextState} = useAppContext();
	const [, updateLocalState] = useState({});
	const renderCount = useRenderCounter(0);

	return (
		<>
			<div className="row align-items-center my-4">
				<div className="col-auto">
					{renderCount}
				</div>
				<div className="col-auto">
					<button className='btn btn-light me-2' onClick={() => updateLocalState({})}>Update local state</button>
					<button className='btn btn-light' onClick={() => updateContextState('B')}>{state.compName} Update context state</button>
				</div>
				<div className="col-auto">
					<h4>Ctx consumer Component B</h4>
				</div>
			</div>

			<ComponentC />
		</>
	)
}
// eslint-disable-next-line no-func-assign
ComponentB = memo(ComponentB);

function ComponentC() {

	const {state, updateContextState} = useAppContext();
	const [, updateLocalState] = useState({});
	const renderCount = useRenderCounter(0);

	return (
		<>
			<div className="row align-items-center my-4">
				<div className="col-auto">
					{renderCount}
				</div>
				<div className="col-auto">
					<button className='btn btn-light me-2' onClick={() => updateLocalState({})}>Update local state</button>
					<button className='btn btn-light' onClick={() => updateContextState('C')}>{state.compName} Update context state</button>
				</div>
				<div className="col-auto">
					<h4>Ctx consumer Component C</h4>
				</div>
			</div>
		</>
	)
}
// eslint-disable-next-line no-func-assign
ComponentC = memo(ComponentC);

function NonMemComponent() {
	const renderCount = useRenderCounter(0);
	return (
		<div className='row gx-3 my-4'>
			<div className="col-auto">
				{renderCount}
			</div>
			<div className="col-auto">
				<h4>Non memoized component</h4>
			</div>
		</div>
	)
}
// eslint-disable-next-line no-func-assign
// OtherComponent = memo(OtherComponent);

// ----------------------------------------

export default function App() {

	const renderCount = useRenderCounter(0);
	const [, forceUpdate] = useState();


	return (
		<>
			{renderCount} <button className='btn btn-light' onClick={() => forceUpdate({})}>Force update</button>

			<AppProvider>
				<NonMemComponent />
				<ComponentA />

				{/* <Comp name='Component A'>
					<Comp name='Component B'>
						<Comp name='Component C'>

						</Comp>
					</Comp>
				</Comp> */}
			</AppProvider>
		</>
	)
}
