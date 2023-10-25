import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const AuthService = () => {
  
  const login = async (username, password) => {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        console.log('response=>' ,response);
        if (response.data.accessToken) {                                //Here we keep the user data to use again below
          localStorage.setItem("user", JSON.stringify(response.data));  //in the getCurrentUser() function, for example.
        }                                                               //LocalStorage is a browser sort of
                                                                        //temp memory where we can keep
        return response.data;                                           //this kind of data.
      });
  }

  const logout = () => {
    localStorage.removeItem("user");
  }

  const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  }

  return { login, logout, register, getCurrentUser };
}

export default AuthService();
