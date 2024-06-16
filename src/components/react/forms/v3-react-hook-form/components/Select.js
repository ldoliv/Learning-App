// components/SelectInput.js
import React from 'react';

const Select = React.forwardRef(({label, name, value, error, onChange, onBlur, options}, ref) => {
	return (
		<div className="form-field">
			<label htmlFor={name} className="form-label">
				{label} <sup>*</sup>
			</label>
			<select
				className={`form-select ${error ? 'is-invalid' : ''}`}
				id={name}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			>
				<option value="">Select an Option</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
});

export default React.memo(Select);
