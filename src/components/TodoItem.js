import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        };
    };

    render() {
        const { handleDeleteTodo, handleMarkComplete } = this.props;
        const { id, title, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={handleMarkComplete.bind(this, id)}
                    />
                    {' ' + title}
                    <button style={btnStyle} onClick={handleDeleteTodo.bind(this, id)}>
                        x
                    </button>
                </p>
            </div>
        );
    }
}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem;