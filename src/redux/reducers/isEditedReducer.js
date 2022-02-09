import actionTypes from "../actions/action-types";

export const isEditedReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SET_EDIT:
      return !state;

    default:
      return state;
  }
};
