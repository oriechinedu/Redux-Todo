import React, { Component } from "react";
import styled from "styled-components";
import uuid from 'uuid'
import Todo from "./Todo";
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../store/actions/actions'

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    font-size: 1.6rem;
  }
  input {
    width: 80%;
    padding: 0.8rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  button {
    width: 19%;
    padding: 0.8rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    cursor: pointer;
    &:hover{
      background: aliceblue;
    }
  }
`
const List = styled.ul`
  margin-top: 1rem;
  width: 100%;
`
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
      <Container>
        <Form onSubmit={(e) => {
          e.preventDefault();
          this.addTodo(this.input.current.value)
        }}>
          <input type="text" placeholder="Add todo" ref={this.input} />
            <button>Submit</button>
        </Form>
        <List>
          {this.props.todos && this.props.todos.map(todo => (
            <Todo todo={todo} key={todo.id} toggleTodo={this.toggleTodo} />
          ))}
        </List>
      </Container>
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
