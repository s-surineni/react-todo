function Todo({todos}) {
    return todos.map((todo, index) => (
        <div className="todo" key={index}>
            {todo.text}
        </div>
    ))
}

export default Todo