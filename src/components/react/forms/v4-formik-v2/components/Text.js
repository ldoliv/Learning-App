import React from 'react'
import {useField} from 'formik';

export default function Text({label, ...props}) {

	const {id, name} = props;
	const [field, meta] = useField(props);

	return (
		<div className="form-field">
			<label htmlFor={id || name} className="form-label">{label} <sup>*</sup></label>
			<input type="text" className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`} {...field} {...props} />
			{meta.touched && meta.error && <div className="invalid-feedback">{meta.error}</div>}
		</div>
	)
}
