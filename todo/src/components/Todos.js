import React, { Component } from "react";
import styled from "styled-components";
import uuid from 'uuid'
import Todo from "./Todo";
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../store/actions/actions'

class Todos extends Component {
  input = React.createRef()

  addTodo = (value) => {
    if (value) {
      const newTodo = {
        id: uuid(),
        value,
        completed: false,
      }
      this.props.addTodo(newTodo)
      this.input.current.value = ''
    }
  }
  toggleTodo = (todo) => {
    this.props.toggleTodo({
      id: todo.id,
      todoStatus: !todo.completed
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.addTodo(this.input.current.value)
        }}>
          <input type="text" placeholder="Add todo" ref={this.input} />
            <button>Submit</button>
        </form>
        <ul>
          {this.props.todos && this.props.todos.map(todo => (
            <Todo todo={todo} key={todo.id} toggleTodo={this.toggleTodo} />
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.todos)
  return {
    todos: state.todos,
  }
}
export default connect(mapStateToProps, { addTodo, toggleTodo })(Todos);
