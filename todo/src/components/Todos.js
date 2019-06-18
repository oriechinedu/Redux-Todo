import React, { Component } from "react";
import styled from "styled-components";
import Todo from "./Todo";

class Todos extends Component {
  input = React.createRef()
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.addTodo(this.input.current.value)
        }}>
          <input type="text" placeholder="Add todo" ref={this.input} />
            <button>Submit</button>
        </form>
        <ul>
          {this.props.todos.map((todo, i) => (
            <Todo todo={todo} key={i} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
