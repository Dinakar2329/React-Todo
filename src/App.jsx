import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    setTasks([...tasks, { text: value.trim(), completed: false }]);
    setValue("");
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    const taskToEdit = tasks[index];
    const updatedTask = prompt("Edit your task:", taskToEdit.text);

    if (updatedTask !== null && updatedTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = updatedTask.trim();
      setTasks(updatedTasks);
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed; // Toggle the completion status
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="AddTask-Container">
        <input
          type="text"
          placeholder="Add task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
      <div className="cards">
        {tasks.map((task, index) => (
          <div className="card" key={index}>
            <span
              className={`task-content ${task.completed ? "completed" : ""}`}
            >
              {index + 1}. {task.text}
            </span>
            <svg
              className="check-icon"
              onClick={() => toggleCompletion(index)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M7 13l1.5-1.5l2 2l5-5L17 10l-6.5 6.5z"
                clip-rule="evenodd"
              ></path>
            </svg>

            <svg
              className="edit-icon"
              onClick={() => handleEdit(index)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path>
                <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"></path>
              </g>
            </svg>
            <svg
              className="delete-icon"
              onClick={() => handleDelete(index)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M8 9h8v10H8z" opacity=".3"></path>
              <path
                fill="currentColor"
                d="m15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"
              ></path>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
