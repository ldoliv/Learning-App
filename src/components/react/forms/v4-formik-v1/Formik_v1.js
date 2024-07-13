import {useState} from "react";
import './assets/styles.css';
import {signupSchema} from "./schemas/signupSchema";
import useSessionStorage from "components/react/hooks/use-session-storage/useLocalStorage";
import {useFormik} from "formik";


// Props can also be spread onto the field with getFieldProps

const initialState = {
	username: '',
	email: '',
	password: '',
	role: '',
	subscribe: false
};

export default function Formik_v1() {

	const {values: formValues, touched, errors, handleSubmit, handleChange, handleBlur, getFieldProps} = useFormik({
		initialValues: initialState,
		validationSchema: signupSchema,
		onSubmit: (values) => {
			console.log('Form data', values);
			// clearForm();
		}
	})

	return (
		<div className="App">
			<form className="signup-form" onSubmit={handleSubmit}>
				<fieldset>
					<h2 className="mb-4">Formik - Sign Up</h2>

					{/* 👉 Here I'm making use of getFieldProps that spread the onBlur and onChange and other properties */}
					<div className="form-field">
						<label htmlFor="username" className="form-label">Username <sup>*</sup></label>
						<input type="text" className={`form-control ${touched.username && errors.username ? 'is-invalid' : ''}`} id="username" {...getFieldProps('username')} />
						{touched.username && errors.username && <div className="invalid-feedback">{errors.username}</div>}
					</div>

					{/* 👉 Here I'm explicitly using Formiks event handlers for onBlur and onChange */}
					<div className="form-field">
						<label htmlFor="email" className="form-label">Email address <sup>*</sup></label>
						<input type="text" className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`} id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={formValues.email} />
						{touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
					</div>

					<div className="form-field">
						<label htmlFor="password" className="form-label">Password <sup>*</sup></label>
						<input type="password" className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`} id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={formValues.password} />
						{touched.password && errors.password && <div className="invalid-feedback">{errors.password}</div>}
					</div>

					<div className="form-field">
						<label htmlFor="role" className="form-label">Role <sup>*</sup></label>
						<select className={`form-select ${touched.role && errors.role ? 'is-invalid' : ''}`} id="role" name="role" onChange={handleChange} onBlur={handleBlur} value={formValues.role}>
							<option value="">Select an Option</option>
							<option value="role">Role</option>
							<option value="individual">Individual</option>
							<option value="business">Business</option>
						</select>
						{touched.role && errors.role && <div className="invalid-feedback">{errors.role}</div>}
					</div>

					<div className="form-field">
						<div className="form-check">
							<input type="checkbox" className={`form-check-input ${touched.subscribe && errors.subscribe ? 'is-invalid' : ''}`} id="subscribe" name="subscribe" onChange={handleChange} onBlur={handleBlur} checked={formValues.subscribe} />
							<label className="form-check-label" htmlFor="subscribe">Subscribe to our newsletter</label>
						</div>
					</div>
					{touched.subscribe && errors.subscribe && <div className="invalid-feedback">{errors.subscribe}</div>}

					<button type="submit" className="btn btn-primary">Create account</button>

				</fieldset>
			</form>
		</div>
	);
}


