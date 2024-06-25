import React from 'react';

import './index.scss';


function calculateWinner(squares) {

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
			match = match && squares[combo[j]] === squares[combo[j + 1]];
		}

		if (match) {
			console.log(squares[combo[0]]);
			return squares[combo[0]];
		}
	}
	return null;
}

function Square(props) {

	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

class Board extends React.Component {


	renderSquare(i) {
		return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
	}

	render() {

		// console.log(this.props);

		return (
			<div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

export default class TicTacToe extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			history: [{
				squares: Array(9).fill(null)
			}],
			stepNumber: 0,
			xIsNext: true
		}
	}

	handleClick(i) {

		console.log(this.state);

		// const history = this.state.history;
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();

		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		let xIsNext = !this.state.xIsNext;


		const newState = {
			history: [
				...history,
				{squares}
			],
			// history: history.concat([{squares}]),
			stepNumber: history.length,
			xIsNext,
		};

		// console.log('currentState: %o', this.state);
		// console.log('newState: %o', newState);

		this.setState(newState);
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0,
		});
	}


	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);

		const moves = history.map((snapshot, index) => {
			const desc = index ?
				'Go to move #' + index :
				'Go to game start';
			return (
				<li key={index}>
					<button className="btn btn-secondary" onClick={() => this.jumpTo(index)}>{desc}</button>
				</li>
			);
		});

		let status;

		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}

		return (
			<div className="game">
				<div className="game-board">
					<Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

