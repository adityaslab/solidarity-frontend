"use client";
import { useState } from "react";
import taskService from "@/services/taskservice";

export default function addTask() {
  const [task, changeTask] = useState("");

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log("adding task", task);
    try {
      const addtask = await taskService.addTask({
        taskName: task,
      });
      console.log(addtask);
      changeTask("");
    } catch (exception) {
      console.log(exception);
    }
  };

  const addTask = () => (
    <form onSubmit={handleAddTask}>
      <div>
        Task
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          value={task}
          name="Task"
          onChange={({ target }) => changeTask(target.value)}
        />
      </div>
      <button className="content-center" type="submit">
        Add Task
      </button>
    </form>
  );

  return (
    <div className="grid h-screen place-items-center">
      <h1 className="font-extraboldxx text-4xl">Add Task</h1>
      {addTask()}
    </div>
  );
}
