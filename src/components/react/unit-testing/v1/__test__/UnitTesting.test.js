import {render, screen} from '@testing-library/react';
import UnitTesting from '../UnitTesting_1';



test('if element exists async', async () => {

	render(<UnitTesting />);

	const testId1 = "button1";
	const testId2 = "button2";

	// screen.debug();	// show render output in console
	expect(screen.queryByTestId(testId2)).toBeNull();

	expect(await screen.findByTestId(testId2)).toBeInTheDocument();
	// screen.debug();	// show render output in console
})
