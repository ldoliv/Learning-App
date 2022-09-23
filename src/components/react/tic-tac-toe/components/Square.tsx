
import type {SquareT} from '../TicTacToe';



type SquarePropTypes = {
	value: SquareT;
	onClick: () => void
}

export function Square(props: SquarePropTypes) {

	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}