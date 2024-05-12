import React from "react"
import './styles.scss';

const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],

	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],

	[0, 4, 8],
	[2, 4, 6],
];

function calcWinner(board) {

	console.log('calcWinner', board);

	for (let i = 0; i < winCombos.length; i++) {
		const rowCombo = winCombos[i];
		if (board[rowCombo[0]] === board[rowCombo[1]] && board[rowCombo[1]] === board[rowCombo[2]]) {
			return board[rowCombo[0]];
		}
	}
	return '';
}

function Square({id, player}) {
	const [state, dispatch] = useGame();

	function handleClick() {
		dispatch(gameActions.play(id));
		// console.log(state);
	}

	return (
		<button className="square" onClick={handleClick}>{player}</button>
	)
}

function Board(props) {
	const [state] = useGame();
	const {history, step} = state;

	// console.log('history', history);

	let index = 0;
	const rows = [0, 1, 2].map(rowIdx => {
		return (
			<div key={`row${rowIdx}`} className="board-row">
				{[0, 1, 2].map(colIdx => {
					const id = index++;
					const player = history[step][id];
					return (
						<Square key={`square${id}`} id={id} player={player} />
					)
				})}
			</div>
		)
	})

	return (
		<div className="game-board">
			<div>
				{rows}
			</div>
		</div>
	)
}

function History(props) {
	const [state, dispatch] = useGame();
	const {winner, next, history} = state;

	function handleClick(step) {
		dispatch(gameActions.goToStep(step));
	}

	const steps = history.map((board, idx) => {

		return (
			<li key={idx}><button className="btn btn-secondary" onClick={() => handleClick(idx)}>{idx === 0 ? `Go to game start` : `Go to move #${idx}`}</button></li>
		)
	})

	return (
		<div className="game-info">
			<div>{winner ? `Winner: ${winner}` : `Next player: ${next}`}</div>
			<ul>
				{steps}
			</ul>
		</div>
	)
}

// ----------------------------------------------------

// Action signature:
// (payload) => {type, payload}
function createActions(reducerMap) {
	return Object.keys(reducerMap).reduce((acc, type) => {
		acc[type] = (payload) => ({
			type,
			payload
		})
		return acc;
	}, {});
}
// Reducer
function reducer(reducerMap) {
	return (state, {type, payload}) => {
		const handler = reducerMap[type];
		return handler ? handler(state, payload) : state;
	}
}
function createReducer(reducerMap) {
	return [createActions(reducerMap), reducer(reducerMap)];
}

// ------------------------------------------------------------------


const gameReducerMap = {
	play: (state, id) => {
		const {history, step, winner, next} = state;

		const board = history[step];
		console.log(board);

		if (!board[id] && !winner) {
			const newBoard = [...board];
			newBoard[id] = next;

			const newHistory = history.slice(0, step + 1);
			newHistory.push(newBoard);

			const winner = calcWinner(newBoard);

			return {
				history: newHistory,
				step: step + 1,
				next: state.next === 'O' ? 'X' : 'O',
				winner,
			}
		}
		return state;
	},
	goToStep: (state, step) => {
		const {history} = state;
		const winner = calcWinner(history[step]);

		return {
			...state,
			step: step,
			next: step % 2 === 0 ? 'X' : 'O',
			winner
		}
	},
}

const [gameActions, gameReducer] = createReducer(gameReducerMap);


const gameContext = React.createContext();

function useGame() {
	const context = React.useContext(gameContext);
	if (!context) {
		throw new Error('To be used in game Provider');
	}
	return context;
}


function GameProvider({children}) {
	const reducer = React.useReducer(gameReducer, {
		history: [Array(9).fill(null)],
		step: 0,
		next: 'X',
		winner: ''
	});

	return (
		<gameContext.Provider value={reducer}>
			{children}
		</gameContext.Provider>
	)
}

export function App() {

	return (
		<GameProvider>
			<div className="game">
				<Board />
				<History />
			</div>
		</GameProvider>
	)
}