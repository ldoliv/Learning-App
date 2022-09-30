
export default function CurrentDate() {

	// const date = new Date('2022-05-01');
	const date = new Date();
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();

	return (
		<div>{day}/{month}/{year}</div>
	)
}