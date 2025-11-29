import axios from "axios";

const BASE_URL = "https://your-api-endpoint.com/todos"; // replace with your API

export const fetchTodosAPI = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addTodoAPI = async (todo) => {
  const response = await axios.post(BASE_URL, todo);
  return response.data;
};

export const updateTodoAPI = async (id, updatedTodo) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedTodo);
  return response.data;
};

export const deleteTodoAPI = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
