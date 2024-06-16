// components/CheckboxInput.js
import React from 'react';

const Checkbox = React.forwardRef(({label, name, value, error, onChange, onBlur}, ref) => {
	return (
		<div className="form-field">
			<div className="form-check">
				<input
					type="checkbox"
					className={`form-check-input ${error ? 'is-invalid' : ''}`}
					id={name}
					name={name}
					onChange={onChange}
					onBlur={onBlur}
					checked={value}
				/>
				<label className="form-check-label" htmlFor={name}>
					{label}
				</label>
			</div>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
});

export default React.memo(Checkbox);
