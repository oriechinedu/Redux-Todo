
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './types'

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  }
}

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  }
}
