import { useEffect, useRef, useState } from "react"

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit({ id: Math.floor(Math.random() * 1000), text: input })
        setInput("")
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input type="text"
                        placeholder="Update your item"
                        name="text"
                        value={input}
                        className="todo-input edit"
                        onChange={handleChange}
                    />
                    <button className="todo-button edit">Update</button>
                </>
            ) : (
                <>
                    <input type="text"
                        placeholder="Add todo"
                        name="text"
                        value={input}
                        className="todo-input"
                        onChange={handleChange} />
                    <button className="todo-button">Add</button>
                </>
            )}
        </form>
    )
}
export default TodoForm
