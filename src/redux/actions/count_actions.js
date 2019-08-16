import { ADD_ONE } from '../constants';

export const addOne = {
	type: ADD_ONE
};

export const addAsync = () => {
	return (dispatch, getState) => {
		setTimeout(() => {
			dispatch(addOne);
		}, 1000);
	};
};
