import React from 'react';
import './TodoItem.css';

// Here is just a refactored version
// There are small differences, but from my experience, this is more clean

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Groceries',
            done: false
        }
    }

    // public class field syntax
    // using this syntax is more clean
    handleClick = () => {
        this.setState({done: !this.state.done})
    }

    render() {
        // destructure properties on the state object
        // makes it easier to see them
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