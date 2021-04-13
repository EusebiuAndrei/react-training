import React from 'react';
import {uuid} from "uuidv4";
import PropTypes from 'prop-types'

class CreateTodo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const todo = {
            id: uuid(),
            name: e.target.elements.title.value,
            description: e.target.elements.description.value,
            done: false
        }
        this.props.addTodo(todo);
        this.props.toggle();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input id='title' type='text'/>
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input id='description' type='text'/>
                </div>
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default CreateTodo

CreateTodo.propTypes = {
    toggle: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
}