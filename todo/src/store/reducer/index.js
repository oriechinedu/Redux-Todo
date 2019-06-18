import { ADD_TODO } from '../actions/types'

const initialState = { todos: [] }
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TODO:
      return state.todos.concat(action.payload);
    default:
      return state;
  }
}

export default reducer;