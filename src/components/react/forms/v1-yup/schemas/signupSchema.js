// signupSchema.js
import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
	username: Yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
	role: Yup.string().required('Please choose a role'),
	gender: Yup.string().required('Please choose a gender'),
	subscribe: Yup.boolean()
});
