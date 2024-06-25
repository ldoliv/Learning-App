import React from 'react';
import './button.scss';

export default function Button({children, id}) {

	return (
		<div data-testid={id} className='button-style'>{children}</div>
	)
}