import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

class TodoItem extends React.Component {
    // Destructuring props
    constructor(props) {
        super(props);
        this.state = {
            isDetailsOpen: false
        }
    }

    toggleDetails = () => {
        this.setState({isDetailsOpen: !this.state.isDetailsOpen})
    }

    render() {
        const {todo, onChange, deleteTodo} = this.props;

        return (
            <li className='todoItem'>
                <div className="todoItemOverview">
                    <p className={todo.done ? "todoItemDone" : null}>{todo.name}</p>
                    <div>
                        <button type='button' onClick={this.toggleDetails}>{this.state.isDetailsOpen ? 'Show less' : 'Show more'}</button>
                        <button type='button' onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={(e) => onChange(e, todo.id)}
                        />
                    </div>
                </div>
                {this.state.isDetailsOpen && (
                    <div>
                        <p>{todo.description}</p>
                    </div>
                )}
            </li>
        );
    }
}

export default TodoItem;

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        done: PropTypes.bool
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}