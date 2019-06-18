import React from 'react'
import styled from 'styled-components'
import { FaRegTrashAlt } from 'react-icons/fa'

const Wrapper = styled.li`
  padding: 0.8rem;
  width: 100%;
  background: aliceblue;
  margin-bottom: 0.1rem;
  font-size: 1.6rem;
  ${props => props.isCompleted ? 'text-decoration: line-through; background: #50C878; color: white': ''}
  position: relative;
`
const DeleteIcon = styled(FaRegTrashAlt)`
  color: red;
  position: absolute;
  right: 20px;
  cursor: pointer;
`
export default function Todo({todo, toggleTodo }) {
  return (
    <Wrapper isCompleted={todo.completed} onClick={() => toggleTodo(todo)}>{ todo.value} <DeleteIcon onClick={(e) => e.stopPropagation()} /></Wrapper>
  )
}