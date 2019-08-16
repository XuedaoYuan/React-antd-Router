import { ADD_ONE } from '../constants';
const initialState = {
	count: 0
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_ONE:
			return {
				...state,
				count: state.count + 1
			};

		default:
			return state;
	}
}
