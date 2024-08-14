import logo from "./logo.svg";
import "./App.css";
import { TaskCard, TaskForm } from "./components/TaskCard";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To do List</h2>
        </header>
        <Main />
      </div>
    </>
  );
}

function Main() {
  const [tasks, setTasks] = useState([]);
  function handleAddTask(task) {
    setTasks((tasks) => (task != null ? [...tasks, task] : [task]));
    // console.log(tasks);
  }
  function handleClear(e) {
    e?.preventDefault();
    setTasks([]);
  }
  function onTaskDone(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }
  function onRemoveTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }
  return (
    <main>
      <TaskForm addTask={handleAddTask} clear={handleClear} />
      <div className="flex flex-col gap-3 h-4/5 px-4 py-4 border border-8 scroll-auto text-[#ffffff] items-center">
        {tasks?.map((task, index) => (
          <TaskCard
            key={task.id}
            index={index}
            task={task}
            toggleTaskDone={onTaskDone}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
