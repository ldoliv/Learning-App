
import type { SquareT, SquaresT } from "./TicTacToe";

	
export function calculateWinner(squares: SquaresT): SquareT {

	const combos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	// for (let i = 0; i < lines.length; i++) {
	// 	const [a, b, c] = lines[i];
	// 	if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
	// 		return squares[a];
	// 	}
	// }
	// return null;

	for (let i = 0; i < combos.length; i++) {

		let match = true;
		const combo = combos[i];

		// for (let j = 0; j < line.length; j++) {
		// 	match = match && squares[prevPos] === squares[line[j]];
		// 	prevPos = line[j];
		// }
		// console.log(' ');


		for (let j = 0; j < combo.length - 1; j++) {
			match = match && squares[combo[j]] && squares[combo[j]] === squares[combo[j + 1]];
		}

		if (match) {
			console.log(squares[combo[0]]);
			return squares[combo[0]];
		}
	}
	return null;
}