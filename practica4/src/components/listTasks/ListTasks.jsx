function ListTasks({ tasks, completeTask, eliminateTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.state ? "line-through" : "none" }}
          >
            {task.title}
          </span>
          <button onClick={() => completeTask(task.id)}>
            {task.state ? "Desmarcar" : "Marcar"}
          </button>
          <button onClick={() => eliminateTask(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTasks;
