"use client";
import task from "@/services/taskservice";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
const Users = ({ id }) => {
  const [users, setUsers] = useState([]);

  const userList = async () => {
    try {
      const data = await task.getUsersofTask(id);
      setUsers(data);
      console.log(data);
    } catch (exception) {
      console.log(exception);
    }
  };
  useEffect(() => {
    userList();
  }, []);
  return <div>{users && <Dropdown users={users} />}</div>;
};

export default Users;
