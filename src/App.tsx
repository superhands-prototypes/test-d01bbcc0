import { useState, useEffect } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: number
}

type Filter = 'all' | 'active' | 'completed'

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: Date.now()
    }

    setTodos([newTodo, ...todos])
    setInputValue('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Todo List</h1>
          <p className="subtitle">Stay organized, get things done</p>
        </header>

        <form onSubmit={addTodo} className="input-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="todo-input"
            autoFocus
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>

        {todos.length > 0 && (
          <div className="filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({todos.length})
            </button>
            <button
              className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active ({activeCount})
            </button>
            <button
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed ({completedCount})
            </button>
          </div>
        )}

        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <button
                className="checkbox"
                onClick={() => toggleTodo(todo.id)}
                aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
              >
                {todo.completed && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
              <span className="todo-text">{todo.text}</span>
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
                aria-label="Delete todo"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        {filteredTodos.length === 0 && (
          <div className="empty-state">
            {filter === 'all' && todos.length === 0 && (
              <>
                <div className="empty-icon">📝</div>
                <p>No todos yet. Add one above!</p>
              </>
            )}
            {filter === 'active' && activeCount === 0 && todos.length > 0 && (
              <>
                <div className="empty-icon">🎉</div>
                <p>All done! No active todos.</p>
              </>
            )}
            {filter === 'completed' && completedCount === 0 && (
              <>
                <div className="empty-icon">📋</div>
                <p>No completed todos yet.</p>
              </>
            )}
          </div>
        )}

        {completedCount > 0 && (
          <div className="footer">
            <button className="clear-btn" onClick={clearCompleted}>
              Clear completed ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
