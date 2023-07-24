import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
/* CSS */
import "./login.css";
import imagePoliecoLogo from './../Assets/Images/Polieco_logo_Nuovo.png'
import sfondoLogin from "../Assets/Images/sfondoLogin.png";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* COMPONENTS */
import Register from "./Register/register";


const LoginPage = ({ onRegistrationSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  // const [isEmailValid, setIsEmailValid] = useState(false);
  // const [isPswValid, setIsPswValid] = useState(false);
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (isEmailValid && isPswValid) {
    // --------------------------fai le validazioni per i campi email e psw con i componenti
    console.log(password, localPassword);
    if (email === localEmail && password === localPassword) {
      localStorage.setItem("signUp", email);
      onRegistrationSuccess();
      //   window.location.reload();
    } else {
      alert("Please Enter valid Credential");
    }
  };

  const handleSignUp = () => {
    setIsRegistered(false);
  };

  // Callback for handling resize event
  const handleResize = useCallback(() => {
    // Update component state if needed
    // ...
  }, []);

  useEffect(() => {
    // Add event listener for resize event
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);



  return (
    <>
      {isRegistered ? (
        <div className="background-image" style={{ backgroundImage: `url(${sfondoLogin})` }}>
          <Container className="mt-5 pt-5">
            <Row className="justify-content-center position-relative">
              <Col md={4}>
                <img
                  src={imagePoliecoLogo}
                  alt="Your Igm Pic"
                  className="igm-fluid"
                  style={{ position: 'absolute', float: 'left', marginLeft: '-115%', width: '100%', height: '100%' }}
                />
                <h2 className="text-center mb-5">
                  {" "}
                  L <FontAwesomeIcon icon={faUserCircle} className="fa-lg" /> G I N{" "}
                </h2>
                {/* --------------------------------------------------REGISTER */}
                {/* <p className="text-center">Not registered yet? Sign up</p> */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formEmail">
                    <Form.Label
                      className={`label-bold ${emailFocused ? "label-focused" : ""}`}
                    >
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="email.."
                      value={email}
                      onChange={handleEmailChange}
                      onFocus={handleEmailFocus}
                      className="small-placeholder"
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label className="label-bold">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password.."
                      value={password}
                      onChange={handlePasswordChange}
                      className="small-placeholder"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-block mx-auto submit-button mt-4"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Form>
                <h2 className="text-center mt-5 small">
                  Not registered yet?{" "}
                  <NavLink onClick={handleSignUp}>Sign up</NavLink>
                </h2>
                {/* <Row className="mt-3">
                                <Col>
                                    <p className="text-center"></p>
                                        Forgot password? Reset here
                                    </p>
                                </Col>
                            </Row> */}
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <Register setIsRegistered={(e) => setIsRegistered(e)} />
      )}
    </>
  );
};

export default LoginPage;
