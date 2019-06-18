import {createStore, combineReducers } from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducer'


const reducers = {
  todoReducer: reducer,
  toastr: toastrReducer
}

const combinedReducers = combineReducers(reducers)
const store = createStore(
  combinedReducers,
  composeWithDevTools()
);

export default store;