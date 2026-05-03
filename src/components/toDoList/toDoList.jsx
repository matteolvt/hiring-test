import React, { useState } from "react";
import "./toDoList.css";
import ProgressBar from "../progressBar/progressBar";
import AddTask from "../addTask/AddTask";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newText) => {
    if (newText.trim() !== "") {
      const taskObject = {
        id: Date.now(),
        text: newText,
        completed: false,
      };
      setTasks([...tasks, taskObject]);
    }
  };

  const deleteTask = (TaskId) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== TaskId;
    });
    setTasks(newTasks);
  };

  const toggleTask = (TaskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === TaskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="to-do-list">
      <main className="content">
        <div className="left-column">
          <ProgressBar
            completedTasks={completedTasks}
            totalTasks={totalTasks}
          />
          <AddTask onAdd={addTask} />
        </div>
        <div className="right-column">
          <div className="todo-header">TO DO</div>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span
                  className={`task-text ${task.completed ? "completed" : ""}`}
                >
                  {task.text}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ToDoList;
