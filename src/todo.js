import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './action'
// import AddTodo from './todo/AddTodo'
// import TodoList from './todo/TodoList'



class Todo extends Component {
  render () {
    const { dispatch, visibleTodos, visibilityFilter } = this.props

    return (
      <div>

      </div>
    )
  }
}
