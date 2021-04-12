import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Groceries',
            done: false
        }
    }

    handleClick = () => {
        this.setState({done: !this.state.done})
    }

    render() {
        const { name, done } = this.state;

        return (
            <div className="root">
                <p className={done ? "done" : null}>{name}</p>
                <input type="checkbox" checked={done} onClick={this.handleClick}/>
            </div>
        )
    }
}

export default TodoItem;