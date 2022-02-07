import React, { Component } from "react";
import "./App.scss";
import { connect } from "react-redux";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="flex__center">
          <div className="todo__inner">
            <Header />
            <Form />
            <TodoList />
            <div className="totalDone">
              Done:{" "}
              {this.props.items.filter((item) => item.checked === true).length}{" "}
              / {this.props.items.length}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps, null)(App);
