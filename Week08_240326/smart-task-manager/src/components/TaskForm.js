import { useState, useRef } from "react";

function TaskForm({ addTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask(text, priority);
    setText("");
    inputRef.current.focus();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />

      <select onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button>Add</button>
    </form>
  );
}

export default TaskForm;