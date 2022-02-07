import actions from "./action-types";
export const addItems = (item) => ({
  type: actions.ADD_ITEM,
  payload: { item },
});

export const deleteItems = (index) => ({
  type: actions.DELETE_ITEM,
  payload: { index },
});
export const deleteAllItems = () => ({
  type: actions.DELETE_ALL_ITEM,
});

export const trackCheckedState = (item) => ({
  type: actions.TRACK_CHECKED_STATE,
  payload: { item },
});

export const setDoneAllItems = (item) => ({
  type: actions.SET_DONE_ALL_ITEMS,
});

export const setInputChanges = (item) => ({
  type: actions.SET_INPUT_CHANGES,
  payload: { item },
});

export const setEdit = () => ({
  type: actions.SET_EDIT,
});

export const setItemToEdit = (item) => ({
  type: actions.SET_ITEM_TO_EDIT,
  payload: { item },
});

export const setEditInputChanges = (targetEditValue) => ({
  type: actions.SET_EDIT_INPUT_CHANGES,
  payload: { targetEditValue },
});

export const changeEditItem = (editedItem) => ({
  type: actions.CHANGE_EDIT_ITEM,
  payload: { editedItem },
});
