import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login = async (username, password) => {
    const response = await axios.post(API_URL + "signin", { username, password });
    if (response.data.accessToken) localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  };

  logout = () => {
    localStorage.removeItem("user");
  };

  register = async (username, email, password) => {
    const response = await axios.post(API_URL + "signup", { username, email, password });
    return response.data;
  };

  getCurrentUser = () => JSON.parse(localStorage.getItem("user"));
}

export default new AuthService();
