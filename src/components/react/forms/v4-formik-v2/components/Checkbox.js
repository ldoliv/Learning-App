import React from 'react';
import {useField} from 'formik';

export default function Checkbox({label, ...props}) {

	const {id, name} = props;
	const [field, meta] = useField({...props, type: 'checkbox'});

	return (
		<div className="form-field">
			<div className="form-check">
				<input type="checkbox" className={`form-check-input ${meta.touched && meta.error ? 'is-invalid' : ''}`} {...field} {...props} />
				<label className="form-check-label" htmlFor={id || name} >{label}</label>
			</div>
			{meta.touched && meta.error && <div className="invalid-feedback">{meta.error}</div>}
		</div>
	)
}
