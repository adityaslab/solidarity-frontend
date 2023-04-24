import axios from "axios";

const baseUrl = "http://localhost:8080/api/users";

let token = null;
let id = null;
const setToken = () => {
  const item = JSON.parse(localStorage.getItem("loggedSolidarityUser"));
  token = `Bearer ${item.token}`;
  id = item.id;
};

const getTasksofUser = async () => {
  setToken();
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(`${baseUrl}/${id}/listTasks`, config);
  console.log(response.data);
  return response.data;
};

const joinTask = async (taskId) => {
  setToken();
  const config = {
    headers: { Authorization: token },
  };
  console.log("here ", taskId);
  const response = await axios
    .post(`${baseUrl}/joinTask/${taskId}`, null, config)
    .then((res) => {
      return JSON.stringify(res.data);
    });
  return response;
};

export default { getTasksofUser, joinTask };
