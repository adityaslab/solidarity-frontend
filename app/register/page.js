"use client";
import { useFormik } from "formik";
import registerService from "@/services/authservice";
import Link from "next/link";

export default function page() {
  async function register(values) {
    try {
      const registerResponse = await registerService.register(values);
      console.log(registerResponse);
    } catch (exception) {
      console.log(exception);
    }
  }

  const SignupForm = () => {
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        if (values.role === "Admin") {
          const changedValues = { ...values, role: "A" };
          register(changedValues);
        } else {
          const changedValues = { ...values, role: "U" };
          register(changedValues);
        }
      },
    });

    return (
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            className="input input-bordered w-full max-w-xs"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            className="input input-bordered w-full max-w-xs"
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            className="input input-bordered w-full max-w-xs"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="password">
            Password
            <br />
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div>
          <label htmlFor="role">
            Role
            <br />
          </label>
          <select
            className="select w-max max-w-xs"
            id="role"
            name="role"
            type="role"
            onChange={formik.handleChange}
            value={formik.values.role}
          >
            <option>User</option>
            <option>Admin</option>
          </select>
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
        <SignupForm />
        <Link href={"/"}>Back to Login</Link>
      </div>
    </div>
  );
}
