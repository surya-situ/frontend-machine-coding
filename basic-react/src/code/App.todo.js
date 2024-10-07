import React, { useState, useEffect } from 'react';

function App() {
    
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    task: '',
    priority: 'low',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.title.trim() === '' || formData.task.trim() === '') {
        alert('Both title and task should not be empty..');
        return
    };

    const newTodo = { ...formData, id: Date.now() };
    setTodos([...todos, newTodo]);
    setFormData({
      title: '',
      task: '',
      priority: 'low',
      date: ''
    });
  };

  useEffect(() => {
    console.log(todos);
  },[todos])

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="task">Task:</label>
          <textarea
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label htmlFor="date">Due Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>

      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.task} - Priority: {todo.priority} - Due Date: {todo.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
