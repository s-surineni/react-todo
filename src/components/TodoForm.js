import { useState } from "react"

function TodoForm() {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Add todo"
                name="text"
                value={input}
                className="todo-input" />
            <button className="todo-button">Add</button>
        </form>
    )
}
export default TodoForm
