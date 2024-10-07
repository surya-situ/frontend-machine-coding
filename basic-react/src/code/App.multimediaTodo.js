import React, { useEffect, useState } from 'react';

const App = () => {
  const [inputs, setInputs] = useState({ title: '', task: '', date: '', priority: 'low', media: '' });
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // If the input is a file input, handle the file separately
    if (name === 'media') {
      const file = files[0]; // Get the first file from the files array
      const reader = new FileReader();

      // When the file is loaded, set the media value to the base64 encoded data
      reader.onload = () => {
        setInputs((prevData) => ({
          ...prevData,
          media: reader.result // Set the media value to the base64 encoded data
        }));
      };

      // Read the file as a data URL (base64 encoded data)
      reader.readAsDataURL(file);
    } else {
      // For non-file inputs, update the inputs state as usual
      setInputs((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = () => {
    if (inputs.title === '' || inputs.task === '' || inputs.date === '') {
      return alert('Title, task, and date are required...');
    } else {
      const newTodo = { ...inputs, id: Date.now() };
      setTodos([...todos, newTodo]);
      setInputs({ title: '', task: '', date: '', priority: 'low', media: '' }); // Reset the inputs after submission
    }
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div>React todo</div>

      <div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Add title"
            value={inputs.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            placeholder="Add task"
            value={inputs.task}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="media">Media</label>
          <input
            type="file"
            accept="image/*"
            name="media"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            value={inputs.priority}
            onChange={handleChange}
            type="select"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <div>
        {todos.map((task) => (
          <div key={task.id}>
            <h6>{task.title}</h6>
            <h6>{task.task}</h6>
            <h6>{task.date}</h6>
            <h6>{task.priority}</h6>
            <img className={{height: '30px'}} src={task.media} alt="todo" />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
