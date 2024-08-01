// hooks/useForm.js
import {useState, useCallback} from 'react';
import useSessionStorage from 'components/react/hooks/useSessionStorage/useLocalStorage';

const useForm = (formId, initialState, validationSchema) => {
	const [formValues, setFormValues] = useSessionStorage(formId, initialState);
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const validateField = useCallback(async (target) => {
		const {name, value, type, checked} = target;
		try {
			await validationSchema.validateAt(name, {[name]: type === 'checkbox' ? checked : value});
			setErrors((prevErrors) => ({...prevErrors, [name]: undefined}));
		} catch (validationError) {
			setErrors((prevErrors) => ({...prevErrors, [name]: validationError.message}));
		}
	}, [validationSchema]);

	const handleChange = useCallback(async (e) => {
		const {name, value, type, checked} = e.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: type === 'checkbox' ? checked : value,
		}));

		if (touched[name]) {
			validateField(e.target);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [touched, validateField]);

	const handleBlur = useCallback((e) => {
		const {name} = e.target;
		setTouched((prevTouched) => ({...prevTouched, [name]: true}));
		validateField(e.target);
	}, [validateField]);

	const validateAll = useCallback(async () => {
		try {
			await validationSchema.validate(formValues, {abortEarly: false});
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
	}, [formValues, validationSchema]);

	const clearForm = useCallback(() => {
		setFormValues(initialState);
		setTouched({});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialState]);

	const handleSubmit = useCallback((onSubmit) => {
		return async (e) => {
			e.preventDefault();
			setTouched(() =>
				Object.keys(formValues).reduce((acc, key) => {
					acc[key] = true;
					return acc;
				}, {})
			);
			const isValid = await validateAll();
			if (isValid) {
				setIsSubmitting(true);
				try {
					await onSubmit(formValues, clearForm);
				} catch (err) {
					throw err;
				} finally {
					setIsSubmitting(false);
				}
			}
		};
	}, [formValues, validateAll, clearForm]);

	return {
		formValues,
		errors,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};

export default useForm;
