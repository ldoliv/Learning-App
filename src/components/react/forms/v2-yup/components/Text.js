// components/TextInput.js
import React from 'react';

const Text = ({label, type, name, value, error, onChange, onBlur}) => {
	return (
		<div className="form-field">
			<label htmlFor={name} className="form-label">
				{label} <sup>*</sup>
			</label>
			<input
				type={!type ? 'text' : type}
				className={`form-control ${error ? 'is-invalid' : ''}`}
				id={name}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

export default React.memo(Text);
