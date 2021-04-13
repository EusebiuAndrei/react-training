import React from 'react';
import todos from "../../fixtures/todos";
import TodoHeader from "../TodoHeader";
import TodoList from "../TodoList";
import CreateTodo from "../CreateTodo";

class TodoController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: todos,
            isCreateTodoOpen: false
        }
    }

    handleChange = (e, id) => {
        const todos = this.state.todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                done: !todo.done
            }
        });
        this.setState({todos: todos});
    }

    addTodo = (todo) => {
        this.setState({todos: [...this.state.todos, todo]})
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos})
    }

    toggleCreateTodo = () => {
        this.setState({isCreateTodoOpen: !this.state.isCreateTodoOpen})
    }

    getTodosCount = () => {
        const todosTotal = this.state.todos.length;
        const doneTodosTotal = this.state.todos.filter(todo => todo.done === true).length;
        const notDoneTodosTotal = todosTotal - doneTodosTotal;

        return {doneTodosTotal, notDoneTodosTotal};
    }

    render() {
        const { todos, isCreateTodoOpen } = this.state;
        const { doneTodosTotal, notDoneTodosTotal } = this.getTodosCount();

        return (
            <div>
                <TodoHeader notDoneTodosTotal={notDoneTodosTotal} doneTodosTotal={doneTodosTotal} />
                {
                    isCreateTodoOpen ?
                    <CreateTodo toggle={this.toggleCreateTodo} addTodo={this.addTodo}/> :
                    <button type='button' onClick={this.toggleCreateTodo}>Add new</button>
                }
                <TodoList todos={todos} onChange={this.handleChange} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default TodoController;