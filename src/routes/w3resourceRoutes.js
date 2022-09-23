

export const w3resourceRoutes = {
	label: 'W3resource',
	baseFolder: 'w3resource',
	routes: [
		{
			desc: 'Write a JavaScript program to display the current day and time in the following format.',
			output: <>Expected Output:<br />Today is: Tuesday.<br />Current time is: 10 PM : 30 : 38</>,
			path: 'basic/current-day-time',
			componentPath: 'basic/1.CurrentDayTime',
			tags: []
		},
		{
			desc: 'Write a JavaScript program to get the current date.',
			output: <>Expected Output:<br />dd/mm/yyyy</>,
			path: 'basic/current-date',
			componentPath: 'basic/2.CurrentDate',
			tags: []
		},
		{
			desc: 'Write a JavaScript program to rotate the string "w3resource" in right direction by periodically removing one letter from the end of the string and attaching it to the front.',
			output: '',
			path: 'basic/rotate-chars',
			componentPath: 'basic/3.RotateChars',
			tags: []
		},
		{
			desc: 'Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.',
			output: '',
			path: 'basic/first-sunday',
			componentPath: 'basic/7.FirstSunday',
			tags: []
		}
	]
}