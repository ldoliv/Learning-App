import React from 'react';
import classnames from 'classnames';

function InputSearch(props) {

	console.log('InputSearch rendered');

	const searchContainer = classnames('control', {'is-loading': props.loading}, props.className);

	function handleChange(e) {
		props.onChange(e.target.value);
	}

	return (
		<div className={searchContainer} >
			<input type="text" className="input" value={props.value} onChange={handleChange} />
		</div>
	)
}

// export default React.memo(InputSearch);
export default InputSearch;