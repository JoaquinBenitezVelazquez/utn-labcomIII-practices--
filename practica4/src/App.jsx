import "./App.css";
import { useState } from "react";

import AddTask from "./components/addTasks/AddTask";
import ListTasks from "./components/listTasks/ListTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) =>
    setTasks([...tasks, { id: crypto.randomUUID(), title, state: false }]);

  const eliminateTask = (id) =>
    setTasks(tasks.filter((task) => task.id !== id));

  const completeTask = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, state: !task.state } : task
      )
    );

  return (
    <div>
      <h1>LISTA DE TAREAS</h1>
      <AddTask addTask={addTask} />
      <ListTasks
        tasks={tasks}
        completeTask={completeTask}
        eliminateTask={eliminateTask}
      />
    </div>
  );
}

export default App;
