
// Action types
const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';

// Action creators
export const increment = (payload = 1) => ({type: INCREMENT, payload})
export const decrement = (payload = 1) => ({type: DECREMENT, payload})


const initalState = {
	count: 0
};

// Reducer
export const countReducer = (state = initalState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {count: state.count + action.payload};
		case DECREMENT:
			return {count: state.count - action.payload};
		default:
			return state;
	}
}
