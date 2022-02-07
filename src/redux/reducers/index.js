import { combineReducers } from "redux";
import { itemsReducer } from "./itemsReducer";
import { setInputChangesReducer } from "./setInputChangesReducer";
import { isEditedReducer } from "./isEditedReducer";
import { setItemToEditReducer } from "./setItemToEditReducer";

export default combineReducers({
  items: itemsReducer,
  todosValue: setInputChangesReducer,
  isEdited: isEditedReducer,
  itemToEdit: setItemToEditReducer,
});
