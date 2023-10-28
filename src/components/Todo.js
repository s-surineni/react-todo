import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, removeTodo }) {
    return todos.map((todo, index) => (
        <div>
            <div className="todo" key={index}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
                <TiEdit />
            </div>
        </div>
    ))
}

export default Todo