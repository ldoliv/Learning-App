// Form_2.js
import React from 'react';
import useForm from './hooks/useForm';
import {signupSchema} from './schemas/signupSchema';
import './assets/styles.css';
import Text from './components/Text';
import Select from './components/Select';
import Checkbox from './components/Checkbox';


const initialState = {
	username: '',
	email: '',
	password: '',
	role: '',
	subscribe: false,
};

const roleOptions = ['Role', 'Individual', 'Business'];

const Form_2 = () => {
	const {formValues, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = useForm('form2_signup', initialState, signupSchema);

	const submitForm = async (formValues, clearForm) => {
		try {
			// const response = await fetch('/api/signup', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify(formValues),
			// });

			// if (!response.ok) {
			// 	throw new Error('Network response was not ok');
			// }

			// const result = await response.json();
			// console.log('Form submission success:', result);
			clearForm();
		} catch (error) {
			console.error('Form submission error:', error);
		}
	};

	return (
		<div className="App">
			<form className="signup-form" onSubmit={handleSubmit(submitForm)}>
				<fieldset>
					<h2 className="mb-4">Sign Up</h2>

					<Text
						label="Username"
						name="username"
						value={formValues.username}
						error={errors.username}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					<Text
						label="Email address"
						name="email"
						value={formValues.email}
						error={errors.email}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					<Text
						label="Password"
						type="password"
						name="password"
						value={formValues.password}
						error={errors.password}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					<Select
						label="Role"
						name="role"
						value={formValues.role}
						error={errors.role}
						onChange={handleChange}
						onBlur={handleBlur}
						options={roleOptions}
					/>
					<Checkbox
						label="Subscribe to our newsletter"
						name="subscribe"
						value={formValues.subscribe}
						error={errors.subscribe}
						onChange={handleChange}
						onBlur={handleBlur}
					/>

					<button type="submit" className="btn btn-primary" disabled={isSubmitting}>
						{isSubmitting ? 'Submitting...' : 'Create account'}
					</button>
				</fieldset>
			</form>
		</div>
	);
};

export default Form_2;
