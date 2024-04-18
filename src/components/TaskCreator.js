import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export const TaskCreator = ({ createTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName);
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-creator-form">
      <div className="input-container">
        <input
          type="text"
          value={newTaskName}
          placeholder="Enter a new task"
          onChange={(e) => setNewTaskName(e.target.value)}
          className="task-input"
        />
      </div>
      <button type="submit" className="task-button">
        <FontAwesomeIcon icon={faPlus} className="task-icon" /> Save task
      </button>
    </form>
  );
};

export default TaskCreator;
