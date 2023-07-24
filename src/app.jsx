import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Global/Footer/footer";
import Login from "./Login/login";

const App = () => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const handleRegistration = () => {
    setIsLoginSuccess(!isLoginSuccess);
  };

  return (
    <>
      <BrowserRouter>
        {isLoginSuccess || localStorage.getItem("signUp") ? (
          <>
            <Navbar emailProp={handleRegistration} to={"/home"} />
            <Footer />
          </>
        ) : (
          <Login onRegistrationSuccess={handleRegistration} />
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
