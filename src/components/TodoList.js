import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
    const [todos, setTodos] = useState([])

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const addTodo = (todo) => {
        console.log(todo)
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const updateTodo = (id, newValue) => {
        if (!newValue || /^\s*$/.test(newValue)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === id ? newValue : item)))
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter((todo) => todo.id !== id)
        setTodos(removeArr)
    }
    return (
        <div className="todo-list">
            <h1>What is the plan</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
            updateTodo={updateTodo}/>
        </div>
    );
}

export default TodoList;