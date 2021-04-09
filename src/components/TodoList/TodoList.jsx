import React from 'react';
import TodoItem from "../TodoItem";
import PropTypes from "prop-types";

// Destructuring props directly on the parameter
const TodoList = ({ todos, onClick }) => {
    return (
        <ul style={{display: 'flex', flexDirection: 'column'}}>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} onClick={onClick}/>)}
        </ul>
    )
}

export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        {
            id: PropTypes.string,
            name: PropTypes.string,
            done: PropTypes.bool
        }
    ),
    onClick: PropTypes.func
}