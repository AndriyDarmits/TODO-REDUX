import actionTypes from "../actions/action-types";

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return [...state, action.payload.item];

    case actionTypes.DELETE_ITEM:
      return state.filter((todo) => todo.id !== action.payload.index);

    case actionTypes.DELETE_ALL_ITEM:
      return [];

    case actionTypes.TRACK_CHECKED_STATE:
      const changedCheckState = state.map((todo) => {
        if (todo.id === action.payload.item.id) {
          todo.checked = !todo.checked;
          return todo;
        }
        return todo;
      });
      return changedCheckState;

    case actionTypes.SET_DONE_ALL_ITEMS:
      const setDoneAllItems = state.map((todo) => {
        todo.checked = true;
        return todo;
      });
      return setDoneAllItems;

    case actionTypes.CHANGE_EDIT_ITEM:
      const temp = [...state];
      const chengeEditItem = temp.map((item) => {
        if (item.id === action.payload.editedItem.id) {
          return { ...action.payload.editedItem };
        }
        return item;
      });
      return chengeEditItem;

    default:
      return state;
  }
};
