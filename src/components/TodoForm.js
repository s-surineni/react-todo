import { useState } from "react"

function TodoForm() {
    const [input, setInput] = useState("")
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setInput("")
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Add todo"
                name="text"
                value={input}
                className="todo-input"
                onChange={handleChange} />
            <button className="todo-button">Add</button>
        </form>
    )
}
export default TodoForm
