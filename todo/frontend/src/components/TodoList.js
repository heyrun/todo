import Todo from "./todo";
import AddTodo from "./AddTodo"; // assuming AddTodo is in a separate file
const TodoList = ( { todos, deleteTodo, refreshTodos } ) => {
    return (
        <div className="todo-list">
            <AddTodo refreshTodos={refreshTodos} />
            {
            todos.map((todo) => (
                <Todo key={todo.id} id={todo.id} todo={todo} deleteTodo={deleteTodo} refreshTodos={refreshTodos} />
            ))}
        </div>
    )
}
export default TodoList
