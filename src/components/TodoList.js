import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        const { todos, handleMarkComplete, handleDeleteTodo } = this.props;
        return todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                handleMarkComplete={handleMarkComplete}
                handleDeleteTodo={handleDeleteTodo}
            />
        ));
    }
}

// Proptypes
TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default TodoList;
