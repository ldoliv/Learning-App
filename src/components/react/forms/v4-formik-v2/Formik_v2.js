import {useState} from "react";
import './assets/styles.css';
import {signupSchema} from "./schemas/signupSchema";
import useSessionStorage from "components/react/hooks/useSessionStorage/useLocalStorage";
import {Formik, Field, Form, ErrorMessage} from "formik";
import Text from './components/Text';
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";



const initialState = {
	username: '',
	email: '',
	password: '',
	role: '',
	subscribe: false
};

export default function Formik_v2() {

	return (
		<Formik
			initialValues={initialState}
			validationSchema={signupSchema}
			onSubmit={(values, {setSubmitting}) => {
				console.log('Form data', values);
			}}
		>
			<Form className="signup-form">
				<div className="App">
					<h2 className="mb-4">Formik - Sign Up</h2>

					<Text label="Username" name="username" type="text" />
					<Text label="Email address" name="email" type="text" />
					<Text label="Password" name="password" type="password" />

					<Select label="Role" name="role">
						<option value="">Select an Option</option>
						<option value="role">Role</option>
						<option value="individual">Individual</option>
						<option value="business">Business</option>
					</Select>

					<Checkbox label="Subscribe to our newsletter" name="subscribe" />

					<button type="submit" className="btn btn-primary">Create account</button>

				</div>
			</Form>
		</Formik>
	);
}


