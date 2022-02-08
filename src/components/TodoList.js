import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";

class TodoList extends Component {
  deleteItem(index) {
    if (this.props.isEdited) {
      return;
    } else {
      this.props.deleteItem(index);
    }
  }

  trackCheckedState(item) {
    if (this.props.isEdited) {
      return;
    } else {
      this.props.changeCheckedstate(item);
    }
  }

  setEdit(item) {
    if (this.props.isEdited) {
      return;
    } else {
      this.props.setEdit();
      this.props.setItemToEdit(item);
    }
  }
  render() {
    return (
      <div className="list__field">
        {this.props.items.map((item, index) => (
          <li key={index}>
            <div>
              <input
                className="custom-checkbox"
                type="checkbox"
                onChange={() => this.trackCheckedState(item)}
                checked={item.checked ? true : ""}
              />
              <span className="delete" onClick={() => this.deleteItem(item.id)}>
                &#x1F5D9;
              </span>
              <span
                className="label"
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.label}
              </span>
            </div>
            <button onClick={() => this.setEdit(item)}>Edit</button>
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  isEdited: state.isEdited,
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
