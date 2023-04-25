"use client";
import { useFormik } from "formik";
import taskService from "@/services/taskservice";
import Link from "next/link";

export default function addTask(values) {
  async function handleAddTask(values) {
    try {
      const response = await taskService.addTask(values);
      console.log(response);
    } catch (exception) {
      console.log(exception);
    }
  }

  const AddTaskForm = () => {
    const formik = useFormik({
      initialValues: {
        taskName: "",
        description: "",
        status: "",
        priority: "",
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        handleAddTask(values);
      },
    });

    return (
      <form className="grid grid flow row" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="taskName">Task Name</label>
          <input
            className="input input-bordered w-full max-w-xs"
            id="taskName"
            name="taskName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.taskName}
          />
        </div>
        <div>
          <label htmlFor="description">description</label>
          <input
            className="input input-bordered w-full max-w-xs"
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <div>
          <label htmlFor="status">status</label>
        </div>
        <div>
          <input
            className="input input-bordered w-full max-w-xs"
            id="status"
            name="status"
            type="status"
            onChange={formik.handleChange}
            value={formik.values.status}
          />
        </div>
        <div>
          <label htmlFor="priority">priority</label>
        </div>
        <div>
          <input
            className="input input-bordered w-full max-w-xs"
            id="priority"
            name="priority"
            type="priority"
            onChange={formik.handleChange}
            value={formik.values.priority}
          />
        </div>
        <div className="grid place-items-center pt-4">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className=" w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="grid h-screen place-items-center">
        <h1 className="font-extraboldxx text-4xl">Solidarity</h1>
        <AddTaskForm />
        <Link href={"/profile"}>Back to Main Page</Link>
      </div>
    </div>
  );
}
