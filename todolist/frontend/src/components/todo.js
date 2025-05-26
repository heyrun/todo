import { RiDeleteBinLine } from "react-icons/ri";
import { update_todo } from "../api/endpoints";

const Todo = ( { id, todo, deleteTodo, refreshTodos } ) => {
    const handleDelete = async () => {
        await deleteTodo(id);
    }
    const handleUpdate = async () => {
        await update_todo(id, !todo.completed);
        refreshTodos();
    }
    return (
        <div className="todo">
            <div className="todo-container">
                <input type="checkbox" onChange={handleUpdate} checked={todo.completed}/>
                <h3 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.todo_name}</h3>
                <RiDeleteBinLine size={28} color="red" onClick={handleDelete}/>
            </div>
        </div>
    )
}
export default Todo
