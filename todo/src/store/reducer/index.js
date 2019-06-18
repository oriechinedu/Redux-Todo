import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/types'

const initialState = { todos: [] }
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TODO:
      return { todos: state.todos.concat(action.payload) };

    case TOGGLE_TODO:
      return { todos: state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = action.payload.todoStatus
          return todo;
        }
        return todo;
      })}
    case DELETE_TODO:
      return { todos: state.todos.filter(todo => todo.id !== action.payload)}
    default:
      return state;
  }
}

export default reducer;