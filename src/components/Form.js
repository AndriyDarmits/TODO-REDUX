import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";

class Form extends Component {
  trackChangeInputField(e) {
    if (this.props.isEdited) {
      this.props.setEditInputChanges(e.target.value);
    } else {
      this.props.setInputChanges(e.target.value);
    }
  }

  addItems() {
    if (this.props.todosValue !== "") {
      this.props.addTodos({
        id: this.props.items.length,
        checked: false,
        label: this.props.todosValue,
      });
    } else {
      alert("The input field is emptys");
    }
    this.props.setInputChanges("");
  }

  submitEdit() {
    if (this.props.itemToEdit.label !== "") {
      this.props.changeEditItem(this.props.itemToEdit);
      this.props.setEdit();
      this.props.setItemToEdit("");
    } else {
      alert("The input field is empty");
    }
  }

  clearAllItems() {
    if (this.props.isEdited) {
      return;
    } else {
      this.props.clearAllItems();
    }
  }

  setDoneAllItems() {
    if (this.props.isEdited) {
      return;
    } else {
      this.props.setDoneAllItems();
    }
  }

  render() {
    return (
      <>
        <div className="input__field">
          <input
            type="text"
            className="input"
            name="input"
            placeholder="Type something to do..."
            value={
              this.props.isEdited
                ? this.props.itemToEdit.label
                : this.props.todosValue
            }
            onChange={(e) => this.trackChangeInputField(e)}
          />
        </div>
        <div className="button__field">
          {this.props.isEdited ? (
            <button
              className="editSubmit__btn"
              onClick={() => this.submitEdit()}
            >
              Submit edit
            </button>
          ) : (
            <button className="add__btn" onClick={() => this.addItems()}>
              Add
            </button>
          )}
          <button
            className="deleteAll__btn"
            onClick={() => this.clearAllItems()}
          >
            Clear All
          </button>
          <button onClick={() => this.setDoneAllItems()}>Done all</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  todosValue: state.todosValue,
  isEdited: state.isEdited,
  itemToEdit: state.itemToEdit,
});

const mapDispatchToProps = {
  addTodos: actions.addItems,
  deleteItem: actions.deleteItems,
  clearAllItems: actions.deleteAllItems,
  changeCheckedstate: actions.trackCheckedState,
  setDoneAllItems: actions.setDoneAllItems,
  setInputChanges: actions.setInputChanges,
  setEdit: actions.setEdit,
  setItemToEdit: actions.setItemToEdit,
  setEditInputChanges: actions.setEditInputChanges,
  changeEditItem: actions.changeEditItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
