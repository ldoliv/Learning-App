import React from 'react'

type IProps = {
	onClick: (text: string) => void
}
export default function TextInput({onClick}: IProps) {

	const inputEl = React.useRef<HTMLInputElement>(null);
	
	function handleClick() {
		onClick(inputEl.current?.value || '')
	}

	return (
		<>
			<input type="text" ref={inputEl} />
			<button onClick={handleClick}>Add</button>
		</>
	)
}
