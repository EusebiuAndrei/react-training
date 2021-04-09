import React from 'react';
import todos from "../../fixtures/todos";
import TodoHeader from "../TodoHeader";
import TodoList from "../TodoList";

class TodoController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: todos
        }
    }

    handleClick = (e, id) => {
        const todos = this.state.todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                done: !todo.done
            }
        });
        this.setState({todos: todos});
    }

    getTodosCount = () => {
        const todosTotal = this.state.todos.length;
        const doneTodosTotal = this.state.todos.filter(todo => todo.done === true).length;
        const notDoneTodosTotal = todosTotal - doneTodosTotal;

        return {doneTodosTotal, notDoneTodosTotal};
    }

    render() {
        const { todos } = this.state;
        const { doneTodosTotal, notDoneTodosTotal } = this.getTodosCount();

        return (
            <div>
                <TodoHeader notDoneTodosTotal={notDoneTodosTotal} doneTodosTotal={doneTodosTotal} />
                <TodoList todos={todos} onClick={this.handleClick} />
            </div>
        )
    }
}

export default TodoController;