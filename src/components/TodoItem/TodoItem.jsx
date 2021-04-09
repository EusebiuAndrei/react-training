import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = (props) => {
    // Destructuring props
    const { todo, onChange } = props;

    return (
        <li className="todoItem">
            <p className={todo.done ? "todoItemDone" : null}>{todo.name}</p>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => onChange(e, todo.id)}
            />
        </li>
    );
}

export default TodoItem;

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        done: PropTypes.bool
    }).isRequired,
    onChange: PropTypes.func.isRequired
}