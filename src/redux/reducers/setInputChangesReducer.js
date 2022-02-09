import actionTypes from "../actions/action-types";

export const setInputChangesReducer = (state = "", action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_CHANGES:
      return action.payload.item;

    default:
      return state;
  }
};
