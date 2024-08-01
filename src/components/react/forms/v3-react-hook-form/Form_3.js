// Form_3.js
import React, {useState} from 'react';
import {signupSchema} from './schemas/signupSchema';
import './assets/styles.css';
import {Text1, Text2} from './components/Text';
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {delay} from 'helpers';
import {useRenderCounter} from 'components/react/hooks/useRenderCounter/UseRenderCounter';


const initialState = {
	username: '',
	email: '',
	password: '',
	role: '',
	subscribe: false,
};

const roleOptions = ['Role', 'Individual', 'Business'];

const Form_3 = () => {

	const renderCounter = useRenderCounter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {register, handleSubmit, formState: {errors}, trigger, reset} = useForm({
		defaultValues: initialState,
		resolver: yupResolver(signupSchema),
		// mode: 'all'
		mode: 'onTouched'	// validation mode https://www.react-hook-form.com/api/useform/#mode
	});

	const onSubmit = async (data) => {
		console.log('Form data', data);
		setIsSubmitting(true);
		await delay(2000);
		reset(initialState);
		setIsSubmitting(false);
		// Perform form submission (e.g., send data to the server)
	};


	return (
		<div className="App">
			<form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					{renderCounter}
					<h2 className="mb-4">RHF - Sign Up</h2>

					{/* Option 1 */}
					{/* <Text1
						label="Username"
						name="username"
						error={errors.username?.message}
						register={register}
					/> */}

					{/* Option 2 */}
					<Text2
						label="Username"
						error={errors.username?.message}
						{...register('username')} 
					/>

					<Text2
						label="Email address"
						name="email"
						error={errors.email?.message}
						{...register('email')}
					/>
					<Text2
						label="Password"
						type="password"
						error={errors.password?.message}
						{...register('password')}
					/>
					<Select
						label="Role"
						error={errors.role?.message}
						options={roleOptions}
						{...register('role')}
					/>
					<Checkbox
						label="Subscribe to our newsletter"
						error={errors.subscribe?.message}
						{...register('subscribe')}
					/>

					<button type="submit" className="btn btn-primary" disabled={isSubmitting}>
						{isSubmitting ? 'Submitting...' : 'Create account'}
					</button>

				</fieldset>
			</form>
		</div>
	);
};

export default Form_3;
