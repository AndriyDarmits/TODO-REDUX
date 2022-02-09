import actionTypes from "../actions/action-types";

export const setItemToEditReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEM_TO_EDIT:
      return { ...action.payload.item };

    case actionTypes.SET_EDIT_INPUT_CHANGES:
      const temp = { ...state };
      temp.label = action.payload.targetEditValue;
      return temp;

    default:
      return state;
  }
};
