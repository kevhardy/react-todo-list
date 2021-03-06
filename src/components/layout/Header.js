import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
    background: '#333333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '15px 15px 0px 0px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'underline'
};

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">
                Home
            </Link>{' '}
            |{' '}
            <Link style={linkStyle} to="/about">
                About
            </Link>
        </header>
    );
}
