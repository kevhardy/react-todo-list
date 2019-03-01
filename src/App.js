import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';

let uniqueID = 4;

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Add todos by using the form above',
                completed: false
            },
            {
                id: 2,
                title: 'Place Holder Todo (Already completed)',
                completed: true
            },
            {
                id: 3,
                title: 'Delete items by hitting the red button to the right',
                completed: false
            }
        ]
    };

    // Toggle Todo Completion
    handleMarkComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) todo.completed = !todo.completed;
                return todo;
            })
        });
    };

    // Delete a Todo
    handleDeleteTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    // Add a Todo
    addTodo = title => {
        const newTodo = {
            id: ++uniqueID,
            title: title,
            completed: false
        };
        this.setState({ todos: [...this.state.todos, newTodo] });
    };

    render() {
        const { todos } = this.state;
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo} />
                                    <TodoList
                                        todos={todos}
                                        handleMarkComplete={this.handleMarkComplete}
                                        handleDeleteTodo={this.handleDeleteTodo}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
