import axios from "axios";

const baseUrl = "http://localhost:8080/api/tasks";

let token = null;

const setToken = () => {
  const item = JSON.parse(localStorage.getItem("loggedSolidarityUser"));
  token = `Bearer ${item.token}`;
};

const addTask = async (newTask) => {
  setToken();
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(`${baseUrl}/addtask`, newTask, config);
  return response.data;
};

const removeTask = async (taskId) => {
  setToken();
  const config = {
    headers: { Authorization: token },
  };
  console.log(JSON.stringify(config));
  const response = await axios
    .delete(`${baseUrl}/removeTask/${taskId}`, config)
    .then((res) => {
      return res.data;
    });
  return response;
};

const markComplete = async (userId) => {
  setToken();
  const config = {
    headers: { Authorization: token },
  };
  const response = axios
    .put(`${baseUrl}/markComplete/${userId}`, null, config)
    .then((res) => {
      return res.data;
    });
  return response;
};

const getallTasks = async () => {
  setToken();
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(`${baseUrl}/alltasks`, config);
  return response.data;
};

const getUsersofTask = async (id) => {
  setToken();
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(`${baseUrl}/${id}/listUsers`, config);
  return response.data;
};

export default {
  addTask,
  setToken,
  getUsersofTask,
  getallTasks,
  removeTask,
  markComplete,
};
