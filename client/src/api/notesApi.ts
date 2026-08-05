import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export async function getTree() {
  const response = await api.get("/tree");

  return response.data;
}


export async function getNote(path: string) {
  const response = await api.get('/notes/content', { params: {path} })

  return response.data
}

