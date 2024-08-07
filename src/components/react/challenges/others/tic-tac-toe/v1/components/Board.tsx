import React from 'react';
import {Square} from './Square';
import type {SquaresT} from '../TicTacToe';



type BoardPropTypes = {
	squares: SquaresT;
	onClick: (i: number) => void
}

export class Board extends React.Component<BoardPropTypes> {

	renderSquare(i: number) {
		return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
	}

	render() {
		console.log(this.props);
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