import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:3333/api/v1",
})

export const register = (data) => API.post("/register", data)
export const login = (data) => API.post("/auth/login", data)

export const sendVerifyCode = (data) => API.post("/auth/forgot/send-code", data)
export const checkVerifyCode = (data) => API.post("/auth/forgot/check-code", data)
export const resetPassword = (data) => API.post("/auth/forgot/reset-password", data)
