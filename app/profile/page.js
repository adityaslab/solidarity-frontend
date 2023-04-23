"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";
import TasksContainer from "@/components/TaskContainer";
import uService from "@/services/userservice";
import Header from "@/components/Header";

export default function profile() {
  const [items, setItems] = useState({});
  const [tasks, setTasks] = useState([]);
  const [lout, setLogout] = useState(false);

  const userData = async () => {
    try {
      const data = await uService.getTasksofUser();
      setTasks(data);
    } catch (exception) {
      console.log(exception);
    }
  };
  useEffect(() => {
    if (lout === true) {
      localStorage.clear();
      redirect("/");
    }
  }, [lout]);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("loggedSolidarityUser"));
    userData();
    if (item) {
      setItems(item);
    }
  }, []);
  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <Navbar setLogout={setLogout} />

      <div className="flex flex-1 h-screen min-h-screen">
        <div className="flex flex-col  overflow-y-hidden">
          <Header name={items.email} />

          <div className="flex mb-5 overflow-y-hidden">
            <TasksContainer title="Pending" titleBorder tasks={tasks[0]} />
            <TasksContainer title="In progress" tasks={tasks[1]} />
            <TasksContainer title="Completed" tasks={tasks[2]} />
          </div>
        </div>
        <div className="flex pl-32 items-center">
          <button
            className="btn btn-secondary btn-wide"
            onClick={() => redirect("/addTask")}
          >
            {" "}
            add Task
          </button>
        </div>
      </div>
    </div>
  );
}
