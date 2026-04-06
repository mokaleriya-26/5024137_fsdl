function TaskItem({ task, deleteTask }) {
  return (
    <div className={`task ${task.priority}`}>
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
}

export default TaskItem;