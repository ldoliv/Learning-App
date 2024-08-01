import React from 'react';
import classnames from 'classnames';
import {useRenderCounter} from 'components/react/hooks/useRenderCounter/UseRenderCounter';


function InputSearch(props) {

	// console.log('InputSearch rendered');
	// const renderCount = useRenderCounter(0);
	const searchContainer = classnames('control', {'is-loading': props.loading}, props.className);

	function handleChange(e) {
		props.onChange(e.target.value);
	}

	return (
		<div className={searchContainer} >
			{/* {renderCount} */}
			<input type="text" className="input" onChange={handleChange} value={props.value} />
		</div>
	)
}

export default InputSearch;