
export default function CurrentDayTime() {

	const today = new Date();

	const locale = ['default', 'pt-PT', 'en-US'];
	const day = today.toLocaleDateString(locale[0], {
		// weekday: 'narrow',
		// weekday: 'short',
		weekday: 'long',
	});


	const getTime12Format = (date) => {
		
		let hours = date.getHours();
		const hoursSufix = (hours >= 12) ? 'PM' : 'AM';
		hours = (hours > 12) ? hours - 12 : hours;
		hours = hours.toString().padStart(2, '0');

		const minutes = date.getMinutes().toString().padStart(2, '0');
		const seconds = date.getSeconds().toString().padStart(2, '0');

		return `${hours} ${hoursSufix} : ${minutes} : ${seconds}`;
	}

	const timeFormated = getTime12Format(today);

	return (
		<>
			<div>Today is {day}</div>
			<div>Current time is {timeFormated}</div>
		</>
	)
}