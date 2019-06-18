import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.li`
  ${props => props.isCompleted ? 'text-decoration: line-through': ''}
`
export default function Todo({todo, toggleTodo }) {
  return (
    <Wrapper isCompleted={todo.completed} onClick={() => toggleTodo(todo)}>{ todo.value}</Wrapper>
  )
}