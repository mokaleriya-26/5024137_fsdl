import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks yet 🚀</p>;
  }

  return (
    <>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </>
  );
}

export default TaskList;