import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        console.log(todo)
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }
    return (
        <div className="todo-list">
            <h1>What is the plan</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos}/>
        </div>
    );
}

export default TodoList;