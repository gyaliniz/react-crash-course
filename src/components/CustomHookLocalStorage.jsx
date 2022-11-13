import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./../shared/Button";
function CustomHookLocalStorage() {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      task,
      completed: false,
      date: new Date().toLocaleString(),
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task : </label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{ padding: "5px" }}
          />
          <Button type="submit" text="Submit" />
        </div>
      </form>
      <ol>
        {tasks.map((item) => (
          <li key={item.date}>{item.task}</li>
        ))}
      </ol>
    </>
  );
}

export default CustomHookLocalStorage;
