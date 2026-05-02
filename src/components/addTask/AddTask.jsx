import React, { useState } from "react";
import "./addTask.css";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div className="add-task-container">
      <h3 className="add-task-title">Add something to do</h3>
      <textarea
        className="add-task-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe your task..."
      />
      <button className="add-task-button" onClick={handleSubmit}>
        ADD
      </button>
    </div>
  );
};

export default AddTask;
