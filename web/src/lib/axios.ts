import axios from "axios"

// Axios - Conexão com API
export const api = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 1000,
})
