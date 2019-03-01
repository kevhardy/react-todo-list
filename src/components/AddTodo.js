import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ''
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }} autocopmlete="off">
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo ..."
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                    autocomplete="off"
                />
                <input type="submit" value="Submit" className="btn" style={{ flex: '1' }} />
            </form>
        );
    }
}

export default AddTodo;
