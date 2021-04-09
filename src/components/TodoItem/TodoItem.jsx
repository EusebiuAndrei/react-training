import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = (props) => {
    // Destructuring props
    const { todo, onClick } = props;

    return (
        <li className="todoItem">
            <p className={todo.done ? "todoItemDone" : null}>{todo.name}</p>
            <input
                type="checkbox"
                checked={todo.done}
                onClick={(e) => onClick(e, todo.id)}
            />
        </li>
    );
}

export default TodoItem;

TodoItem.propTypes = {
    todo: {
        id: PropTypes.string,
        name: PropTypes.string,
        done: PropTypes.bool
    },
    onClick: PropTypes.func
}