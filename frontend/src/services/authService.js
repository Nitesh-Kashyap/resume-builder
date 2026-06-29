import api from "./api";
import { ENDPOINTS } from "../utils/constants";

const authService = {
  login(data) {
    return api.post(ENDPOINTS.LOGIN, data);
  },

  register(data) {
    return api.post(ENDPOINTS.REGISTER, data);
  },

  me() {
    return api.get(ENDPOINTS.ME);
  },

  logout() {
    return api.post(ENDPOINTS.LOGOUT);
  },
};

export default authService;