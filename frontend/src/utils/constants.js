export const API = {
  BASE_URL: "http://localhost:3000/api/v1",
  TIMEOUT: 10000,
};

export const ENDPOINTS = {
  LOGIN: "/login",
  REGISTER: "/register",
  LOGOUT: "/logout",
  ME: "/me",
  REFRESH: "/refresh",
};

export const STORAGE_KEYS = {
  ACCESS_TOKEN: "resume_builder_access_token",
  REFRESH_TOKEN: "resume_builder_refresh_token",
  USER: "resume_builder_user",
};