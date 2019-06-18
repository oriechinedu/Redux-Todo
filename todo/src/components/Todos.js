import React, { Component } from "react";
import styled from "styled-components";
import uuid from 'uuid'
import Todo from "./Todo";
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from '../store/actions/actions'

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
    border: 1px solid aliceblue;
    &:focus {
      border: 2px solid #297373;
    }
  }
  button {
    width: 19%;
    padding: 0.8rem;
    border-radius: 6px;
    border: 1px solid aliceblue;
    background: aliceblue;
    cursor: pointer;
    &:hover{
      background: #297373;
      color: aliceblue;
    }
  }
`
const List = styled.ul`
  margin-top: 1rem;
  width: 100%;
`
const H1 = styled.h1`
  font-size: 3.5rem;
  color: aliceblue; 
  text-align: center;
  padding: 1rem 0;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    background: aliceblue;
    height: 2px;
    width: 100px;
    bottom: 10px;
    left: 40%;
  }
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
      this.updateStorage(newTodo)
    }
  }
  toggleTodo = (todo) => {
    this.props.toggleTodo({
      id: todo.id,
      todoStatus: !todo.completed
    })
  }
  deleteTodo = (id) => {
    this.props.deleteTodo(id);
    this.updateStorage(null, id);
  }
  updateStorage = (newTodo = null, id = null) => {
    const currentTodos = JSON.parse(localStorage.getItem('todos')) || []
    if (newTodo) {
      const updatedTodos = currentTodos.concat(newTodo);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    if (id) {
      const updatedTodos = currentTodos.filter(todo => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
  }
  render() {
    return (
      <Container>
        <H1>My Todo</H1>
        <Form onSubmit={(e) => {
          e.preventDefault();
          this.addTodo(this.input.current.value)
        }}>
          <input type="text" placeholder="Add todo" ref={this.input} />
            <button>Submit</button>
        </Form>
        <List>
          {this.props.todos && this.props.todos.map(todo => (
            <Todo todo={todo} key={todo.id} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
          ))}
        </List>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}
export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo })(Todos);
