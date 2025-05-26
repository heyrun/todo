import { useState } from 'react'
import { add_todo } from '../api/endpoints'

const AddTodo = ({ refreshTodos }) => {
    const [todo, setTodo] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (todo.trim() !== '') {
            await add_todo(todo)
            setTodo('')
            refreshTodos()
        }
    }
    return (
        <div className="add-todo" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input 
                    type="text"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                    placeholder="Add Todo"
                    style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
                <button type="submit" onClick={handleSubmit} style={{ 
                    padding: '8px 16px',
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default AddTodo
