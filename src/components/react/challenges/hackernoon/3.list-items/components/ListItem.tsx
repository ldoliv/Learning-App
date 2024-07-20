import React from 'react'


type ListItemT = {
	text: string,
	onClick: () => void
}
function ListItem({text, onClick}: ListItemT) {
	return (
		<div onClick={onClick}>{text}</div>
	)
}

export {ListItem as default}