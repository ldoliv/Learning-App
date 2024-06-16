import {useState} from "react";
import './assets/styles.css';
import {signupSchema} from "./schemas/signupSchema";
import useSessionStorage from "components/react/hooks/use-session-storage/useLocalStorage";




const initialState = {
	username: '',
	email: '',
	password: '',
	role: '',
	subscribe: false
};

export default function Form_1() {

	const [formValues, setFormValues] = useSessionStorage('form1_signup', initialState);
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});

	const validateField = async (target) => {
		const {name, value, type, checked} = target;
		try {
			await signupSchema.validateAt(name, {[name]: type === 'checkbox' ? checked : value});
			setErrors((prevErrors) => ({...prevErrors, [name]: undefined}));
		} catch (validationError) {
			setErrors((prevErrors) => ({...prevErrors, [name]: validationError.message}));
		}
	}

	const handleChange = async (e) => {
		const {name, value, type, checked} = e.target;
		setFormValues({
			...formValues,
			[name]: type === 'checkbox' ? checked : value
		});

		if (touched[name]) {
			validateField(e.target);
		}
	}

	const handleBlur = async (e) => {
		const {name} = e.target;
		setTouched({...touched, [name]: true});
		validateField(e.target);
	};

	const validateAll = async () => {
		try {
			await signupSchema.validate(formValues, {abortEarly: false});
			setErrors({});
			return true;
		} catch (validationErrors) {
			const formattedErrors = {};
			validationErrors.inner.forEach((error) => {
				formattedErrors[error.path] = error.message;
			});
			setErrors(formattedErrors);
			return false;
		}
	};

	const clearForm = () => {
		setFormValues(initialState);
		setTouched({});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setTouched(() => Object.keys(formValues).reduce((acc, key) => {
			acc[key] = true
			return acc;
		}, {}));

		const isValid = await validateAll();
		if (isValid) {
			console.log('Form data', formValues);
			clearForm();
			// Perform form submission (e.g., send data to the server)
		}
	};


	return (
		<div className="App">
			<form className="signup-form" onSubmit={handleSubmit}>
				<fieldset>
					<h2 className="mb-4">Sign Up</h2>

					<div className="form-field">
						<label htmlFor="username" className="form-label">Username <sup>*</sup></label>
						<input type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} id="username" name="username" onChange={handleChange} onBlur={handleBlur} value={formValues.username} />
						{errors.username && <div className="invalid-feedback">{errors.username}</div>}
					</div>

					<div className="form-field">
						<label htmlFor="email" className="form-label">Email address <sup>*</sup></label>
						<input type="text" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={formValues.email} />
						{errors.email && <div className="invalid-feedback">{errors.email}</div>}
					</div>

					<div className="form-field">
						<label htmlFor="password" className="form-label">Password <sup>*</sup></label>
						<input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={formValues.password} />
						{errors.password && <div className="invalid-feedback">{errors.password}</div>}
					</div>

					<div className="form-field">
						<label htmlFor="role" className="form-label">Role <sup>*</sup></label>
						<select className={`form-select ${errors.role ? 'is-invalid' : ''}`} id="role" name="role" onChange={handleChange} onBlur={handleBlur} value={formValues.role}>
							<option value="">Select an Option</option>
							<option value="role">Role</option>
							<option value="individual">Individual</option>
							<option value="business">Business</option>
						</select>
						{errors.role && <div className="invalid-feedback">{errors.role}</div>}
					</div>

					<div className="form-field">
						<div className="form-check">
							<input type="checkbox" className={`form-check-input ${errors.subscribe ? 'is-invalid' : ''}`} id="subscribe" name="subscribe" onChange={handleChange} onBlur={handleBlur} checked={formValues.subscribe} />
							<label className="form-check-label" htmlFor="subscribe">Subscribe to our newsletter</label>
						</div>
					</div>

					<button type="submit" className="btn btn-primary">Create account</button>

				</fieldset>
			</form>
		</div>
	);
}


