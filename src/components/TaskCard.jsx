import { useState } from "react";

export function TaskForm({ addTask, clear }) {
  const [item, setItem] = useState("");
  function formSubmit(e) {
    e.preventDefault();
    if (!item) {
      alert("Please Enter a task to do");
      return;
    }
    const task = {
      id: Date.now(),
      do: item,
      done: false,
    };
    addTask(task);
    setItem("");
  }
  return (
    <>
      <form
        className="flex flex-row gap-4 justify-center items-center"
        onSubmit={formSubmit}
      >
        <label className="text-lg p-2" htmlFor="task">
          Add Task:
        </label>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="p-3 border-2 w-2/4"
          type="text"
          name="Task"
          id="task"
        />

        <Button text="Add Task"></Button>
        <Button action={clear} text="Clear"></Button>
      </form>
    </>
  );
}

export function TaskCard({ task, index, toggleTaskDone, onRemoveTask }) {
  console.log(task);
  return (
    <div
      className={`flex flex-col border-3 border-red-500 w-2/3 ${
        task.done ? "bg-[#685959] text-[#ffffff]" : "bg-blue-300 text-gray-100"
      }  shadow-xl `}
    >
      <div className="flex flex-row justify-between ">
        <div className="text-2xl font-bold px-4 py-8">{index + 1}</div>
        <div className={`text-lg  py-8 ${task.done ? "line-through" : ""}`}>
          {task.do}
        </div>
        <div className="flex flex-col gap-2 justify-between ">
          <div className={`p-1  ${task.done ? "bg-gray-450" : "bg-green-300"}`}>
            <input
              type="checkbox"
              value={task.done}
              onChange={() => toggleTaskDone(task.id)}
            />
          </div>
          {/* <button onClick={} className="bg-red-100 p-1">Edit</button> */}
          <button
            onClick={() => onRemoveTask(task.id)}
            className="bg-red-100 p-1"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export function Button({ text, action }) {
  return (
    <button
      onClick={action}
      className="py-1 px-2 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
      hover:-translate-y-0.5 active:translate-y-0
      bg-transparent dark:bg-transparent hover:bg-blue-600 border-2 border-blue-300
      hover:border-blue-600 dark:border-blue-600 dark:hover:border-blue-600 text-blue-600 hover:text-white dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-white mx-1 md:mx-2 my-1 md:my-2"
    >
      {text}
    </button>
  );
}
