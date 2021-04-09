import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Groceries',
            done: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({done: !this.state.done})
    }

    render() {
        return (
            <div className="root">
                <p className={this.state.done ? "done" : null}>{this.state.name}</p>
                <input type="checkbox" checked={this.state.done} onClick={this.handleClick}/>
            </div>
        )
    }
}

export default TodoItem;