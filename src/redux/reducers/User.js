import { SET_USERINFO } from '../constants';
const initialState = {
	username: ''
};
export default function(state = initialState, action) {
	switch (action.type) {
		case SET_USERINFO:
			return {
				...state,
				username: action.payload.username
			};

		default:
			return state;
	}
}
