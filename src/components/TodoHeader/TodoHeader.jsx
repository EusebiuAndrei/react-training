import React from 'react';
import './TodoHeader.css';
import PropTypes from "prop-types";

const TodoHeader = (props) => {
    return (
        <div className="todoHeader">
            <p>To Do {props.notDoneTodosTotal}</p>
            <p>Done {props.doneTodosTotal}</p>
        </div>
    )
}

export default TodoHeader;

TodoHeader.propTypes = {
    notDoneTodosTotal: PropTypes.number.isRequired,
    doneTodosTotal: PropTypes.number.isRequired
}