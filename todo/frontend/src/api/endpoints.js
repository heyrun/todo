import axios from "axios";

const BASE_URL = "http://localhost:3000/api/"
const GET_TODOS = `${BASE_URL}/todos`
const ADD_TODO = `${BASE_URL}/todos`
const DELETE_TODO = (id) => `${BASE_URL}/todos/${id}`
const UPDATE_TODO = (id) => `${BASE_URL}/todos/${id}/update_completed`

export const get_todos = async () => {
    const response = await axios.get(GET_TODOS);
    return response.data
}

export const add_todo = async (todo) => {
    const response = await axios.post(ADD_TODO, { todo_name: todo, 'completed': false });
    return response.data
}

export const delete_todo = async (id) => {
    const response = await axios.delete(DELETE_TODO(id));
    return response.data
}

export const update_todo = async (id, completed) => {
    const response = await axios.patch(UPDATE_TODO(id), { 'completed': completed });
    return response.data
}
