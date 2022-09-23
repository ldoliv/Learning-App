import {screen, render} from '@testing-library/react';
import Learning from '.';

test('my first test', () => {
	render(<Learning />);

	screen.debug();
})