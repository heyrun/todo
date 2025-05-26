import './App.css';
import TodoList from './components/TodoList';
import { get_todos, delete_todo } from './api/endpoints';
import { useState , useEffect } from 'react'

function App() {
    const [todos, setTodos] = useState([]);
    const [refreshCount, setRefreshCount] = useState(0);

    useEffect(() => {
        const fetchTodos = async () => {
            const data = await get_todos();
            setTodos(data);
        };
        fetchTodos();
    }, [refreshCount]);

    const deleteTodo = async (id) => {
        const deletedTodo = await delete_todo(id);
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const refreshTodos = () => setRefreshCount(prev => prev + 1);

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Todo List</h1>
        <TodoList todos={todos} deleteTodo={deleteTodo} refreshTodos={refreshTodos} />

      </div>
    </div>
  );
}

export default App;
