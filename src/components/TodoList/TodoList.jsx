import React from 'react';
import TodoItem from "../TodoItem";
import PropTypes from "prop-types";

// Destructuring props directly on the parameter
const TodoList = ({ todos, ...props }) => {
    return (
        <ul style={{display: 'flex', flexDirection: 'column', padding: 0}}>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} {...props}/>)}
        </ul>
    )
}

export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
            done: PropTypes.bool
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}