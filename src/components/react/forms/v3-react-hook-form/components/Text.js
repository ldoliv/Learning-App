// components/TextInput.js
import React from 'react';


// Option 1

function Text1({label, type, name, error, register}) {
	return (
		<div className="form-field">
			<label htmlFor={name} className="form-label">
				{label} <sup>*</sup>
			</label>
			<input
				type={!type ? 'text' : type}
				className={`form-control ${error ? 'is-invalid' : ''}`}
				id={name}
				{...register(name)}
			/>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>

	);
};
// eslint-disable-next-line no-func-assign
Text1 = React.memo(Text1);



// Option 2

function Text2({label, type, name, error, ...rest}, ref) {
	return (
		<div className="form-field">
			<label htmlFor={name} className="form-label">
				{label} <sup>*</sup>
			</label>
			<input
				ref={ref}
				type={!type ? 'text' : type}
				className={`form-control ${error ? 'is-invalid' : ''}`}
				id={name}
				name={name}
				{...rest}
			/>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};
// eslint-disable-next-line no-func-assign
Text2 = React.memo(React.forwardRef(Text2));

export {Text1, Text2}
