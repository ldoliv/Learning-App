import React from 'react';
import Button from './components/button/Button';

export function UnitTesting() {

	const [showSecondButton, setShowSecondButton] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			setShowSecondButton(true)
		}, 500)
		// }, 1000)	// fails if 1000
	}, [])

	return (
		<div className='unit-testing'>
			<h1 className='mb-4'>Unit testing</h1>
			<div>
				<Button id="button1">Button1</Button>
			</div>
			{showSecondButton && <div>
				<Button id="button2">Button2</Button>
			</div>}
		</div>
	)
}

export default UnitTesting