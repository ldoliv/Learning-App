import React from 'react';

import './index.scss';
import {calculateWinner} from './calcWinner';
import { Board } from './components/Board';



export type SquareT = null | string;

// export type SquaresT = {
// 	[x: number]: SquareT;				// <- for method "slice" on array
// 	// [key: number]: SquareT
// }
export type SquaresT = SquareT[]
// type Squares = Array<SquareType>

// type Step = {
// 	// squares: SquareType[]
// 	squares: Squares
// }

type TicTacToeState = {
	history: SquaresT[],
	stepNumber: number,
	xIsNext: boolean
}

export class TicTacToe extends React.Component {

	state: TicTacToeState;

	constructor (props: Readonly<{}>) {
		super(props);
		this.state = {
			history: [Array(9).fill(null)],
			stepNumber: 0,
			xIsNext: true
		}
	}

	handleClick(i: number) {

		console.log(this.state);

		// const history = this.state.history;
		// for when clicking on "go to move" button, for example to a lower move, history will be up until that move
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.slice();

		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		let xIsNext = !this.state.xIsNext;

		// console.log('current: %o', history[history.length - 1]);
		// console.log('mutated: %o', squares);


		const newState = {
			history: [
				...history,
				squares
			],
			// history: history.concat([{squares}]),
			stepNumber: history.length,
			xIsNext,
		};

		// console.log('currentState: %o', this.state);
		// console.log('newState: %o', newState);

		this.setState(newState);
	}

	jumpTo(step: number) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0,
		});
	}


	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];			// the board will only show the moves up until stepNumber, this is when you click "Go to move"
		const winner = calculateWinner(current);

		
		const moves = history.map((step: SquaresT, index: number) => {
			const desc = index ? `Go to move #${index}` : 'Go to game start';
			return (
				<li key={index}>
					<button className="btn btn-secondary" onClick={() => this.jumpTo(index)}>{desc}</button>
				</li>
			);
		});

		const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

		return (
			<div className="game">
				<div className="game-board">
					<Board squares={current} onClick={(i: number) => this.handleClick(i)} />
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ul>{moves}</ul>
				</div>
			</div>
		);
	}
}

