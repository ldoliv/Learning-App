import React, {useRef, useEffect} from 'react';


// AS CUSTOM PROP
function Button(props) {
	return (
		<button ref={props.buttonRef}>Button</button>
	);
}

// USING React.forwardRef
const Button2 = React.forwardRef((props, ref) => {
	return (
		<button ref={ref}>Button2</button>
	);
});


export function ForwardingRef() {

	const button1Ref = useRef();
	const button2Ref = useRef();

	useEffect(() => {
		button1Ref.current.style.backgroundColor = 'blue';
		button1Ref.current.style.color = 'white';

		button2Ref.current.style.backgroundColor = 'red';
		button2Ref.current.style.color = 'white';
	}, [])

	return (
		<div className='row'>
			<div className='col-auto'>
				<Button buttonRef={button1Ref} />
			</div>
			<div className='col-auto'>
				<Button2 ref={button2Ref} />
			</div>
		</div>
	);
}