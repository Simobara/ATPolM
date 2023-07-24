import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
<<<<<<< HEAD
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));  //LocalStorage is a browser sort of
        }                                                               //temp memory where we can keep
                                                                        //this kind of data.
        return response.data;
      });
=======
    return axios.post(API_URL + "signin", { username, password })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          //LocalStorage is a browser sort of temp memory where we can keep this kind of data.
          return response.data;
        });
>>>>>>> 3244b9a97af5a1041f9f2787c9ebae276a1e65ec
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
