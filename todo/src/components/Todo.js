import React from 'react'
import styled from 'styled-components'
import { FaRegTrashAlt, FaCheckCircle } from 'react-icons/fa'

const Wrapper = styled.li`
  padding: 0.8rem;
  width: 100%;
  background: aliceblue;
  margin-bottom: 0.1rem;
  font-size: 1.6rem;
  ${props => props.isCompleted ? 'text-decoration: line-through; background: #50C878; color: #3D3522': ''}
  position: relative;
  cursor: pointer;
`
const DeleteIcon = styled(FaRegTrashAlt)`
  color: #FF5964;
  position: absolute;
  right: 20px;
  cursor: pointer;
`
const CheckIcon = styled(FaCheckCircle)`
  color: #85FFC7;
`
export default function Todo({todo, toggleTodo, deleteTodo }) {
  return (
    <Wrapper isCompleted={todo.completed} onClick={() => toggleTodo(todo)}>{ todo.completed && <CheckIcon />} { todo.value} 
    <DeleteIcon onClick={(e) => {
      e.stopPropagation()
      deleteTodo(todo.id)
    }} />
    </Wrapper>
  )
}