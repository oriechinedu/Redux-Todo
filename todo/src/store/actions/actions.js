
import { ADD_TODO, TOGGLE_TODO } from './types'

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
