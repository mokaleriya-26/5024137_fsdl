import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text, priority) => {
    const newTask = {
      id: Date.now(),
      text,
      priority
    };
    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <div className="card">
        <h2>📋 Task Manager</h2>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default Tasks;